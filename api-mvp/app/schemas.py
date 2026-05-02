from pydantic import BaseModel


class AskRequest(BaseModel):
    product_slug: str
    question: str


class AskResponse(BaseModel):
    answer: str
    question: str
    sources: list[str]


class ProductRecord(BaseModel):
    slug: str
    product_code: str
    name_zh: str
    township_slug: str
    township_name_zh: str
    category: str
    season_note: str
    short_intro: str
    story: str
    nutrition_note: str
    eating_tip: str
    is_published: bool
    featured_question: str


class ProductsResponse(BaseModel):
    products: list[ProductRecord]


class ProductResponse(BaseModel):
    product: ProductRecord


class TraceabilityRecord(BaseModel):
    product_code: str
    origin_farm_name: str
    farmer_name: str
    cultivation_method: str
    harvest_window: str
    certification_note: str
    source_url: str
    updated_at: str


class TraceabilityResponse(BaseModel):
    traceability: TraceabilityRecord
