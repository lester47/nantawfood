from fastapi import FastAPI

from app.api.routes.ai import router as ai_router
from app.api.routes.health import router as health_router
from app.api.routes.products import router as products_router


def create_app() -> FastAPI:
    app = FastAPI(title="Nantou Food API MVP")
    app.include_router(health_router)
    app.include_router(products_router, prefix="/api/v1")
    app.include_router(ai_router, prefix="/api/v1")
    return app


app = create_app()
