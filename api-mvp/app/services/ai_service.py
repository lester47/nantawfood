from dataclasses import dataclass
from os import getenv
from typing import Optional
from urllib.parse import urlparse

import httpx

from app.services.products_service import get_product_by_slug, get_traceability_by_product_code


@dataclass
class AskResult:
    answer: str
    sources: list[str]


def ask_product_question(product_slug: str, question: str) -> AskResult:
    product = get_product_by_slug(product_slug)
    if product is None:
        return AskResult(
            answer="目前查不到這個食材，請確認產品代碼或改問已上架的南投食材。",
            sources=["seed:nantou-food"],
        )

    allowed_sources = _build_allowed_sources(product)

    llm_answer = _try_openai_answer(product=product, question=question)
    if llm_answer:
        return AskResult(answer=llm_answer, sources=allowed_sources)

    return AskResult(answer=_build_fallback_answer(product=product, question=question), sources=allowed_sources)


def _build_allowed_sources(product: dict[str, object]) -> list[str]:
    sources = ["seed:nantou-food"]

    product_code = product.get("product_code")
    if not isinstance(product_code, str):
        return sources

    traceability = get_traceability_by_product_code(product_code)
    if traceability is None:
        return sources

    source_url = traceability.get("source_url")
    if not isinstance(source_url, str):
        return sources

    if _is_allowed_source_url(source_url):
        sources.append(source_url)

    return sources


def _is_allowed_source_url(source_url: str) -> bool:
    allowed_domains_env = getenv("AI_ALLOWED_SOURCE_DOMAINS", "example.com,nantou.gov.tw,taft.moa.gov.tw")
    allowed_domains = [item.strip().lower() for item in allowed_domains_env.split(",") if item.strip()]

    hostname = (urlparse(source_url).hostname or "").lower()
    if not hostname:
        return False

    for domain in allowed_domains:
        if hostname == domain or hostname.endswith(f".{domain}"):
            return True

    return False


def _try_openai_answer(product: dict[str, object], question: str) -> Optional[str]:
    api_key = getenv("OPENAI_API_KEY")
    if not api_key:
        return None

    base_url = getenv("OPENAI_BASE_URL", "https://api.openai.com/v1")
    model = getenv("AI_MODEL", "gpt-4o-mini")

    prompt = _build_prompt(product=product, question=question)

    try:
        with httpx.Client(timeout=15.0) as client:
            response = client.post(
                f"{base_url.rstrip('/')}/chat/completions",
                headers={
                    "Authorization": f"Bearer {api_key}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": model,
                    "messages": [
                        {
                            "role": "system",
                            "content": "你是南投食農教育助理。只能根據給你的產品資料回答，不要編造來源。用繁體中文，2-4 句。",
                        },
                        {"role": "user", "content": prompt},
                    ],
                    "temperature": 0.4,
                },
            )

        if response.status_code >= 400:
            return None

        payload = response.json()
        content = payload["choices"][0]["message"]["content"]
        if isinstance(content, str) and content.strip():
            return content.strip()
    except Exception:
        return None

    return None


def _build_prompt(product: dict[str, object], question: str) -> str:
    return (
        f"產品名稱：{product.get('name_zh', '')}\n"
        f"鄉鎮：{product.get('township_name_zh', '')}\n"
        f"故事：{product.get('story', '')}\n"
        f"季節：{product.get('season_note', '')}\n"
        f"營養：{product.get('nutrition_note', '')}\n"
        f"食用建議：{product.get('eating_tip', '')}\n"
        f"問題：{question}\n"
        "請直接回答問題，避免提到未提供的外部資訊。"
    )


def _build_fallback_answer(product: dict[str, object], question: str) -> str:
    name = str(product.get("name_zh", "該食材"))
    story = str(product.get("story", ""))
    season_note = str(product.get("season_note", ""))
    nutrition_note = str(product.get("nutrition_note", ""))

    return (
        f"你問的『{question}』可以先從 {name} 的在地脈絡來理解。"
        f"{story}"
        f"目前可用資料顯示其季節特性為：{season_note}；"
        f"營養與學習切角可從：{nutrition_note} 開始。"
    )
