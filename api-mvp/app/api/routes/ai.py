from fastapi import APIRouter

from app.schemas import AskRequest, AskResponse
from app.services.ai_service import ask_product_question

router = APIRouter()


@router.post("/ai/ask", response_model=AskResponse)
def ask_ai(payload: AskRequest) -> AskResponse:
    result = ask_product_question(product_slug=payload.product_slug, question=payload.question)

    return AskResponse(
        answer=result.answer,
        question=payload.question,
        sources=result.sources,
    )
