export type Township = {
  slug: string;
  nameZh: string;
  summary: string;
};

export type Product = {
  slug: string;
  productCode: string;
  nameZh: string;
  townshipSlug: string;
  townshipNameZh: string;
  category: "fruit" | "tea" | "grain" | "vegetable";
  seasonNote: string;
  shortIntro: string;
  story: string;
  nutritionNote: string;
  eatingTip: string;
  isPublished: boolean;
  featuredQuestion: string;
};

export type TownshipHighlight = {
  slug: string;
  nameZh: string;
  summary: string;
  productCount: number;
};

export type TraceabilityRecord = {
  productCode: string;
  originFarmName: string;
  farmerName: string;
  cultivationMethod: string;
  harvestWindow: string;
  certificationNote: string;
  sourceUrl: string;
  updatedAt: string;
};
