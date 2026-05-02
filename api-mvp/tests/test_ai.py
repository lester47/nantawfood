from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_ai_ask_returns_seed_or_llm_answer() -> None:
    response = client.post(
        "/api/v1/ai/ask",
        json={
            "product_slug": "puli-guava",
            "question": "它為什麼適合食農課？",
        },
    )

    assert response.status_code == 200
    payload = response.json()
    assert "埔里芭樂" in payload["answer"]
    assert payload["sources"]
    assert "seed:nantou-food" in payload["sources"]


def test_ai_ask_unknown_slug_returns_friendly_fallback() -> None:
    response = client.post(
        "/api/v1/ai/ask",
        json={
            "product_slug": "unknown-slug",
            "question": "這個可以怎麼教？",
        },
    )

    assert response.status_code == 200
    payload = response.json()
    assert "查不到" in payload["answer"]
    assert payload["sources"] == ["seed:nantou-food"]
