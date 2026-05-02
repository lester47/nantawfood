from fastapi import APIRouter, HTTPException

from app.schemas import ProductResponse, ProductsResponse, TraceabilityResponse
from app.services.products_service import (
    get_product_by_code,
    get_product_by_slug,
    get_traceability_by_product_code,
    list_published_products,
)

router = APIRouter()


@router.get("/products", response_model=ProductsResponse)
def list_products() -> ProductsResponse:
    return ProductsResponse(products=list_published_products())


@router.get("/products/{slug}", response_model=ProductResponse)
def get_product_by_slug_route(slug: str) -> ProductResponse:
    product = get_product_by_slug(slug)
    if product is not None:
        return ProductResponse(product=product)
    raise HTTPException(status_code=404, detail="Product not found")


@router.get("/products/code/{product_code}", response_model=ProductResponse)
def get_product_by_code_route(product_code: str) -> ProductResponse:
    product = get_product_by_code(product_code)
    if product is not None:
        return ProductResponse(product=product)
    raise HTTPException(status_code=404, detail="Product not found")


@router.get("/traceability/{product_code}", response_model=TraceabilityResponse)
def get_traceability_by_product_code_route(product_code: str) -> TraceabilityResponse:
    traceability = get_traceability_by_product_code(product_code)
    if traceability is not None:
        return TraceabilityResponse(traceability=traceability)
    raise HTTPException(status_code=404, detail="Traceability not found")
