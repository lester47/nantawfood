from typing import Optional

from app.data.products_seed import PRODUCTS, TRACEABILITY


def list_published_products() -> list[dict[str, object]]:
    return [product for product in PRODUCTS if product["is_published"]]


def get_product_by_slug(slug: str) -> Optional[dict[str, object]]:
    return next((product for product in PRODUCTS if product["slug"] == slug), None)


def get_product_by_code(product_code: str) -> Optional[dict[str, object]]:
    return next((product for product in PRODUCTS if product["product_code"] == product_code), None)


def get_traceability_by_product_code(product_code: str) -> Optional[dict[str, object]]:
    traceability = TRACEABILITY.get(product_code)
    if traceability is None:
        return None
    return traceability
