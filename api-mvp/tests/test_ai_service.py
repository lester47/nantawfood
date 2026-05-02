from app.services import ai_service


def test_ask_product_question_filters_disallowed_source_domain(monkeypatch) -> None:
    monkeypatch.setenv("AI_ALLOWED_SOURCE_DOMAINS", "nantou.gov.tw")
    monkeypatch.setattr(ai_service, "_try_openai_answer", lambda product, question: None)

    result = ai_service.ask_product_question("puli-guava", "這個要怎麼教？")

    assert "seed:nantou-food" in result.sources
    assert all("example.com" not in source for source in result.sources)


def test_ask_product_question_uses_llm_answer_when_available(monkeypatch) -> None:
    monkeypatch.setattr(ai_service, "_try_openai_answer", lambda product, question: "這是 LLM 回答")

    result = ai_service.ask_product_question("puli-guava", "它有什麼特色？")

    assert result.answer == "這是 LLM 回答"
    assert "seed:nantou-food" in result.sources
