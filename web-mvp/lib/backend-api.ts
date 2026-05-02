import type { Product, TraceabilityRecord } from "@/lib/types";

export class BackendApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "BackendApiError";
    this.status = status;
  }
}

export type BackendProductRecord = {
  slug: string;
  product_code: string;
  name_zh: string;
  township_slug: string;
  township_name_zh: string;
  category: Product["category"];
  season_note: string;
  short_intro: string;
  story: string;
  nutrition_note: string;
  eating_tip: string;
  is_published: boolean;
  featured_question: string;
};

export type BackendTraceabilityRecord = {
  product_code: string;
  origin_farm_name: string;
  farmer_name: string;
  cultivation_method: string;
  harvest_window: string;
  certification_note: string;
  source_url: string;
  updated_at: string;
};

export type BackendAskResponse = {
  answer: string;
  question: string;
  sources: string[];
};

function getBackendBaseUrl(): string {
  return (
    process.env.API_BASE_URL ??
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    "http://127.0.0.1:8000/api/v1"
  );
}

export async function fetchBackendJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${getBackendBaseUrl()}${path}`, {
    cache: "no-store",
    ...init,
    headers: {
      Accept: "application/json",
      ...(init?.headers ?? {}),
    },
  });

  let payload: unknown = null;

  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    throw new BackendApiError(getBackendErrorMessage(payload), response.status);
  }

  return payload as T;
}

function getBackendErrorMessage(payload: unknown): string {
  if (payload && typeof payload === "object") {
    if ("detail" in payload && typeof payload.detail === "string") {
      return payload.detail;
    }

    if ("error" in payload && typeof payload.error === "string") {
      return payload.error;
    }
  }

  return "Backend request failed";
}

export function normalizeProduct(record: BackendProductRecord): Product {
  return {
    slug: record.slug,
    productCode: record.product_code,
    nameZh: record.name_zh,
    townshipSlug: record.township_slug,
    townshipNameZh: record.township_name_zh,
    category: record.category,
    seasonNote: record.season_note,
    shortIntro: record.short_intro,
    story: record.story,
    nutritionNote: record.nutrition_note,
    eatingTip: record.eating_tip,
    isPublished: record.is_published,
    featuredQuestion: record.featured_question,
  };
}

export function normalizeTraceability(record: BackendTraceabilityRecord): TraceabilityRecord {
  return {
    productCode: record.product_code,
    originFarmName: record.origin_farm_name,
    farmerName: record.farmer_name,
    cultivationMethod: record.cultivation_method,
    harvestWindow: record.harvest_window,
    certificationNote: record.certification_note,
    sourceUrl: record.source_url,
    updatedAt: record.updated_at,
  };
}
