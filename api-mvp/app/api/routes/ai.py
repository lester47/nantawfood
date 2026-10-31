from fastapi import APIRouter, HTTPException

from app.schemas import AskRequest, AskResponse, TeachingRequest, TeachingResponse
from app.services.ai_service import ask_product_question, teach_wrong_answer, configure_runtime, runtime_status

router = APIRouter()

@router.get("/ai/config")
def get_ai_config() -> dict[str, object]:
    return runtime_status()

@router.post("/ai/config")
def set_ai_config(payload: dict[str, object]) -> dict[str, object]:
    key = payload.get("key")
    model = payload.get("model")
    if key is not None and not isinstance(key, str):
        raise HTTPException(status_code=400, detail="API 金鑰格式錯誤")
    configure_runtime(key=key, model=model if isinstance(model, str) else None, clear=bool(payload.get("clear")))
    return runtime_status()

@router.post("/ai/test")
def test_ai_config() -> dict[str, object]:
    status = runtime_status()
    if not status["configured"]:
        raise HTTPException(status_code=400, detail="尚未設定 API 金鑰")
    return {"message": "已設定 API 金鑰；可在領地戰雙方答錯時測試 AI 教學。"}


@router.post("/ai/ask", response_model=AskResponse)
def ask_ai(payload: AskRequest) -> AskResponse:
    result = ask_product_question(product_slug=payload.product_slug, question=payload.question)

    return AskResponse(
        answer=result.answer,
        question=payload.question,
        sources=result.sources,
    )


@router.post("/ai/teach", response_model=TeachingResponse)
def teach_ai(payload: TeachingRequest) -> TeachingResponse:
    teaching = teach_wrong_answer(payload.model_dump())
    if not teaching:
        raise HTTPException(status_code=503, detail="AI 金鑰尚未設定或教學服務暫時無法使用")
    return TeachingResponse(teaching=teaching)
