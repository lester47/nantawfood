// Static classroom demonstration. Answer keys are public; this is not an authoritative contest backend.
(() => {
  const $ = id => document.getElementById(id);
  const teamName = team => team === 'red' ? '紅隊' : '綠隊';
  const otherTeam = team => team === 'red' ? 'green' : 'red';

  function fallbackTeaching(card, attempts) {
    const explanations = attempts.map(item => item.question.explanation).filter(Boolean).join(' ');
    const topic = attempts.map(item => item.question.prompt).filter(Boolean).join('、');
    return `這張卡介紹的是${card.title}。本回合兩題都答錯，表示我們還需要再熟悉「${topic || '食材來源與特色'}」的觀念。${card.voice_intro || ''} ${explanations}閱讀圖卡時，可以先找出食材來自哪裡、怎麼生產，再想想它和日常飲食或環境的關係。下次遇到類似問題，先回到圖卡找關鍵詞，再做判斷。`;
  }

  async function requestAiTeaching(card, town, attempts) {
    const context = {
      town,
      card_id: card.id,
      card_revision_id: card.revision_id,
      food_name: card.title,
      card_summary: card.voice_intro,
      knowledge_points: attempts.map(item => item.question.knowledgePointId).filter(Boolean),
      questions: attempts.map(item => ({
        question_id: item.question.id,
        prompt: item.question.prompt,
        student_answer: item.selectedText,
        correct_answer: item.question.choices.find(choice => choice.id === item.question.answer)?.text || item.question.answer,
        explanation: item.question.explanation
      })),
      official_resources: attempts.flatMap(item => item.question.remediation?.links || []),
      learner_level: '國小',
      language: '繁體中文'
    };
    try {
      const local = ['localhost', '127.0.0.1'].includes(location.hostname);
      const endpoint = window.NANTOU_AI_BASE_URL || (local ? 'http://127.0.0.1:8000' : 'http://127.0.0.1:8000');
      let response;
      try {
        response = await fetch(endpoint.replace(/\/$/, '') + '/api/v1/ai/teach', {
          method: 'POST', headers: {'Content-Type':'application/json'},
          body: JSON.stringify(context), signal: AbortSignal.timeout(45000)
        });
      } catch (e) { throw new Error('無法連線 AI 後端，請啟動本機 AI 服務並允許瀏覽器存取本機網路'); }
      if (!(response.headers.get('content-type') || '').includes('application/json')) throw new Error('AI 網址未提供 JSON 教學服務');
      const data = await response.json();
      if (!response.ok) throw new Error(typeof data.detail === 'string' ? data.detail : 'AI 教學失敗（HTTP ' + response.status + '）');
      if (typeof data.teaching !== 'string' || data.teaching.trim().length < 30) throw new Error('AI 回傳空白或不完整的教學');
      return { text: data.teaching, source: 'ai' };
    } catch (error) {
      console.warn('[AI teaching] fallback:', error.message);
      return { text: 'AI 未連線：' + error.message + '。以下為教材備援。' + fallbackTeaching(card, attempts), source: 'fallback' };
    }
  }

  function append(parent, tag, content, className) {
    const element = document.createElement(tag);
    if (content != null) element.textContent = content;
    if (className) element.className = className;
    parent.append(element);
    return element;
  }

  function teachingMarkup(text) {
    const escaped = String(text).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    return escaped.replace(/\*\*([^*\n]{1,80})\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  }

  window.startNantouQuizDemo = function startNantouQuizDemo({ town, card, attackTeam, ownerBefore, onResolved, onDismiss }) {
    const pair = window.nantouDemoQuizPairs?.[card.id];
    if (!pair || pair.questions.length !== 2 || pair.cardRevisionId !== card.revision_id) {
      throw new Error(`No matching question pair for ${card.id}`);
    }
    const questions = Math.random() < 0.5 ? [...pair.questions] : [...pair.questions].reverse();
    const modal = $('quizModal');
    const choices = $('quizChoices');
    const resultBody = $('quizResultBody');
    const attempts = [];
    let phase = 'attack';
    let currentQuestion = questions[0];
    let resolved = false;

    $('quizTownCard').textContent = `${town}｜${card.title}`;
    $('quizStatus').textContent = '';
    $('quizResult').hidden = true;
    $('quizQuestion').hidden = false;
    $('quizNextPhaseBtn').hidden = true;
    $('quizSubmitBtn').hidden = false;
    $('quizAbortBtn').hidden = false;
    modal.classList.add('show');

    function renderQuestion() {
      const team = phase === 'attack' ? attackTeam : otherTeam(attackTeam);
      currentQuestion = phase === 'attack' ? questions[0] : questions[1];
      $('quizPhase').textContent = `${teamName(team)}｜${phase === 'attack' ? '先攻' : '反攻'}題`;
      $('quizPrompt').textContent = currentQuestion.prompt;
      $('quizStatus').textContent = '請選擇答案後送出。雙方可查閱同一張食材卡。';
      choices.replaceChildren();
      for (const choice of currentQuestion.choices) {
        const label = append(choices, 'label', null, 'quiz-choice');
        const input = append(label, 'input');
        input.type = 'radio';
        input.name = 'quiz-choice';
        input.value = choice.id;
        append(label, 'span', choice.text);
      }
      $('quizSubmitBtn').hidden = false;
      $('quizNextPhaseBtn').hidden = true;
    }

    function revealResult(outcome, winnerTeam) {
      if (resolved) return;
      resolved = true;
      const ownerAfter = winnerTeam || ownerBefore || null;
      const result = {
        cardId: card.id,
        town,
        attackTeam,
        ownerBefore: ownerBefore || null,
        ownerAfter,
        winnerTeam: winnerTeam || null,
        outcome,
        attempts: attempts.map(attempt => ({ questionId: attempt.question.id, team: attempt.team, correct: attempt.correct }))
      };
      onResolved(result);

      $('quizQuestion').hidden = true;
      $('quizAbortBtn').hidden = true;
      $('quizResult').hidden = false;
      resultBody.replaceChildren();
      // r36：結果頁以答對隊伍的顏色顯示大橫幅，一眼看出哪隊拿到領地。
      const modalBox = modal.querySelector('.modal-box');
      modalBox.classList.remove('win-red', 'win-green', 'win-none');
      modalBox.classList.add(winnerTeam ? `win-${winnerTeam}` : 'win-none');
      const reviews = append(resultBody, 'div', null, 'quiz-reviews');
      const summary = outcome === 'aborted'
        ? '本回合已中止，領地維持原狀。'
        : winnerTeam
          ? `${teamName(winnerTeam)}${ownerBefore === winnerTeam ? '守城成功' : '取得領地'}！`
          : '雙方都答錯，領地維持原狀。';
      if (winnerTeam) {
        const banner = append(reviews, 'div', null, `quiz-win-banner ${winnerTeam}`);
        append(banner, 'span', '✔', 'quiz-win-flag');
        const words = append(banner, 'div');
        append(words, 'strong', `${teamName(winnerTeam)}答對！`);
        append(words, 'span', `${ownerBefore === winnerTeam ? '守住' : '搶下'} ${town}`);
      } else {
        append(reviews, 'h3', summary, 'quiz-no-win');
      }
      if (outcome !== 'aborted') {
        for (const attempt of attempts) {
          const block = append(reviews, 'section', null, `quiz-review team-${attempt.team}`);
          const head = append(block, 'h4');
          append(head, 'span', teamName(attempt.team), `quiz-team-tag ${attempt.team}`);
          append(head, 'span', attempt.question.prompt);
          const answer = attempt.question.choices.find(choice => choice.id === attempt.question.answer);
          const verdict = append(block, 'p', null, attempt.correct ? 'quiz-verdict correct' : 'quiz-verdict wrong');
          append(verdict, 'b', attempt.correct ? '✔ 答對' : '✘ 答錯');
          append(verdict, 'span', `　正確答案：${answer?.text || attempt.question.answer}`);
          append(block, 'p', attempt.question.explanation);
          if (!attempt.correct) {
            append(block, 'p', `延伸閱讀：${attempt.question.remediation.summary}`);
            for (const resource of attempt.question.remediation.links) {
              const link = append(block, 'a', resource.title);
              link.href = resource.url;
              link.target = '_blank';
              link.rel = 'noopener noreferrer';
              append(block, 'p', `閱讀重點：${resource.guide}`, 'quiz-reading-guide');
            }
          }
        }
      }
      if (outcome === 'both_incorrect') {
        const teaching = append(resultBody, 'section', null, 'ai-teaching');
        append(teaching, 'h3', 'AI 錯題教學');
        append(teaching, 'p', '正在整理這張食材卡的學習重點……', 'ai-teaching-status');
        requestAiTeaching(card, town, attempts).then(({ text, source }) => {
          teaching.querySelector('.ai-teaching-status').innerHTML = `${teachingMarkup(text)}（${source === 'ai' ? 'AI 教學' : '教材備援'}）`;
          const speak = append(teaching, 'button', '🔊 再播教學');
          speak.type = 'button';
          const pause = append(teaching, 'button', '⏸ 暫停語音');
          pause.type = 'button';
          const stop = append(teaching, 'button', '⏹ 結束語音');
          stop.type = 'button';
          const speakText = () => {
            try { window.speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(text); utterance.lang = 'zh-TW'; window.speechSynthesis.speak(utterance); } catch (error) { teaching.querySelector('.ai-teaching-status').textContent += '（此瀏覽器無法播放語音）'; }
          };
          speak.onclick = speakText;
          pause.onclick = () => { try { if (pause.textContent.includes('繼續')) { window.speechSynthesis.resume(); pause.textContent = '⏸ 暫停語音'; } else { window.speechSynthesis.pause(); pause.textContent = '▶ 繼續語音'; } } catch (error) {} };
          stop.onclick = () => { try { window.speechSynthesis.cancel(); pause.textContent = '⏸ 暫停語音'; } catch (error) {} };
          // AI/教材文字完成後才開始朗讀，避免在回覆尚未完成時播放半段內容。
          speakText();
        });
      }
      $('quizContinueBtn').focus({ preventScroll: true });
      modal.querySelector('.modal-box').scrollTop = 0;
    }

    $('quizSubmitBtn').onclick = () => {
      if (resolved) return;
      const selected = choices.querySelector('input[name="quiz-choice"]:checked');
      if (!selected) {
        $('quizStatus').textContent = '請先選擇一個答案。';
        return;
      }
      const team = phase === 'attack' ? attackTeam : otherTeam(attackTeam);
      const correct = selected.value === currentQuestion.answer;
      const selectedText = currentQuestion.choices.find(choice => choice.id === selected.value)?.text || selected.value;
      attempts.push({ team, question: currentQuestion, correct, selectedText });
      $('quizSubmitBtn').hidden = true;
      if (correct) {
        revealResult(phase === 'attack' ? 'attack_correct' : 'counterattack_correct', team);
      } else if (phase === 'attack') {
        // Do not disclose the first team's response, answer, explanation or hints before counterattack.
        $('quizPrompt').textContent = '';
        choices.replaceChildren();
        $('quizStatus').textContent = '回答錯誤，換對手回答同一張卡的另一題。回合結束後才公布解析。';
        $('quizNextPhaseBtn').hidden = false;
      } else {
        revealResult('both_incorrect', null);
      }
    };

    $('quizNextPhaseBtn').onclick = () => {
      if (resolved || phase !== 'attack' || attempts.length !== 1 || attempts[0].correct) return;
      phase = 'counterattack';
      renderQuestion();
    };

    $('quizAbortBtn').onclick = () => revealResult('aborted', null);
    $('quizContinueBtn').onclick = () => {
      if (!resolved) return;
      // 進入下一回合時，未完成的 AI 教學語音一律視為結束。
      try { window.speechSynthesis.cancel(); } catch (error) {}
      modal.classList.remove('show');
      onDismiss();
    };
    renderQuestion();
  };
})();
