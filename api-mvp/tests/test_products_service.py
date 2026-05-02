from app.services.products_service import (
    get_product_by_code,
    get_product_by_slug,
    get_traceability_by_product_code,
    list_published_products,
)


def test_list_published_products_returns_only_published_items() -> None:
    products = list_published_products()

    assert len(products) >= 4
    assert all(product["is_published"] for product in products)


def test_get_product_by_slug_returns_none_for_missing_slug() -> None:
    assert get_product_by_slug("missing") is None


def test_get_product_by_code_returns_expected_product() -> None:
    product = get_product_by_code("NT-PULI-GUAVA-001")

    assert product is not None
    assert product["slug"] == "puli-guava"


def test_get_traceability_by_product_code_returns_none_for_missing_code() -> None:
    assert get_traceability_by_product_code("missing") is None
