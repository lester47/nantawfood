from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_list_products_returns_seed_data() -> None:
    response = client.get("/api/v1/products")

    assert response.status_code == 200
    payload = response.json()
    assert len(payload["products"]) >= 4
    assert payload["products"][0]["name_zh"]
    assert payload["products"][0]["story"]
    assert payload["products"][0]["featured_question"]


def test_get_product_by_slug_returns_detail() -> None:
    response = client.get("/api/v1/products/puli-guava")

    assert response.status_code == 200
    payload = response.json()
    assert payload["product"]["name_zh"] == "埔里芭樂"
    assert payload["product"]["nutrition_note"] == "富含維生素 C 與膳食纖維。"


def test_get_product_by_code_returns_detail() -> None:
    response = client.get("/api/v1/products/code/NT-PULI-GUAVA-001")

    assert response.status_code == 200
    payload = response.json()
    assert payload["product"]["slug"] == "puli-guava"


def test_get_traceability_by_product_code_returns_detail() -> None:
    response = client.get("/api/v1/traceability/NT-PULI-GUAVA-001")

    assert response.status_code == 200
    payload = response.json()
    assert payload["traceability"]["origin_farm_name"] == "埔里示範果園"


def test_get_traceability_by_product_code_returns_yuchi_data() -> None:
    response = client.get("/api/v1/traceability/NT-YUCHI-BLACKTEA-001")

    assert response.status_code == 200
    payload = response.json()
    assert payload["traceability"]["farmer_name"] == "黃淑真"
