import type {
  Product,
  Township,
  TownshipHighlight,
  TraceabilityRecord,
} from "@/lib/types";

export const townships: Township[] = [
  {
    slug: "puli",
    nameZh: "埔里鎮",
    summary: "盆地氣候穩定，適合果樹與多元食農教學場景。",
  },
  {
    slug: "lugu",
    nameZh: "鹿谷鄉",
    summary: "山霧與海拔條件讓茶香層次更明顯。",
  },
  {
    slug: "caotun",
    nameZh: "草屯鎮",
    summary: "平原農地與灌溉系統支撐稻作與地方飲食文化。",
  },
  {
    slug: "yuchi",
    nameZh: "魚池鄉",
    summary: "結合紅茶、觀光與地方故事，是南投食旅的重要節點。",
  },
];

const products: Product[] = [
  {
    slug: "puli-guava",
    productCode: "NT-PULI-GUAVA-001",
    nameZh: "埔里芭樂",
    townshipSlug: "puli",
    townshipNameZh: "埔里鎮",
    category: "fruit",
    seasonNote: "夏秋為主，校園食農活動常作為鮮食示範。",
    shortIntro: "埔里盆地日夜溫差穩定，讓芭樂果肉清脆、香氣乾淨。",
    story: "埔里芭樂常出現在在地市場與校園食農課，適合拿來談產地到餐桌的距離。",
    nutritionNote: "富含維生素 C 與膳食纖維。",
    eatingTip: "可切片鮮食，也適合搭配優格與生菜做成輕食。",
    isPublished: true,
    featuredQuestion: "埔里芭樂為什麼特別適合食農課程使用？",
  },
  {
    slug: "lugu-oolong-tea",
    productCode: "NT-LUGU-TEA-001",
    nameZh: "鹿谷凍頂烏龍茶",
    townshipSlug: "lugu",
    townshipNameZh: "鹿谷鄉",
    category: "tea",
    seasonNote: "春冬茶風味最具代表性。",
    shortIntro: "高海拔與雲霧環境，形塑凍頂烏龍特有的焙香與回甘。",
    story: "鹿谷茶區不只是一杯茶，更是一段關於山村經濟與製茶技藝傳承的故事。",
    nutritionNote: "茶多酚與香氣成分豐富，適合文化與品飲導覽。",
    eatingTip: "可設計聞香、觀湯色與冷泡體驗，增加互動性。",
    isPublished: true,
    featuredQuestion: "鹿谷凍頂烏龍茶的故事可以怎麼講給學生聽？",
  },
  {
    slug: "caotun-rice",
    productCode: "NT-CAOTUN-RICE-001",
    nameZh: "草屯稻米",
    townshipSlug: "caotun",
    townshipNameZh: "草屯鎮",
    category: "grain",
    seasonNote: "一期、二期稻作皆可延伸到履歷與灌溉議題。",
    shortIntro: "草屯平原的水源與農地條件，讓稻作成為穩定而具代表性的主食故事。",
    story: "從插秧、收割到米食文化，草屯稻米是連結地方生活與農務節奏的重要入口。",
    nutritionNote: "可延伸談碳水化合物、主食結構與米食文化。",
    eatingTip: "適合結合飯糰、米食點心與稻作觀察活動。",
    isPublished: true,
    featuredQuestion: "草屯稻米可以怎麼串成一條產地履歷故事線？",
  },
  {
    slug: "yuchi-black-tea",
    productCode: "NT-YUCHI-BLACKTEA-001",
    nameZh: "魚池紅茶",
    townshipSlug: "yuchi",
    townshipNameZh: "魚池鄉",
    category: "tea",
    seasonNote: "春夏採收可延伸茶園管理與觀光敘事。",
    shortIntro: "魚池鄉以紅茶聞名，能把地方觀光、氣候與加工技術連結起來。",
    story: "從日月潭周邊產業到伴手禮文化，魚池紅茶是南投品牌辨識度很高的代表作。",
    nutritionNote: "適合延伸咖啡因、風味與飲品設計。",
    eatingTip: "可搭配茶點體驗或設計成香氣描述練習。",
    isPublished: true,
    featuredQuestion: "魚池紅茶適合做成什麼樣的 QR 導覽故事？",
  },
];

const traceabilityRecords: TraceabilityRecord[] = [
  {
    productCode: "NT-PULI-GUAVA-001",
    originFarmName: "埔里示範果園",
    farmerName: "王小明",
    cultivationMethod: "友善栽培，搭配校園食農導覽示範",
    harvestWindow: "每年 7 月至 10 月",
    certificationNote: "示範履歷資料，後續可接實際產銷履歷來源",
    sourceUrl: "https://example.com/puli-guava-traceability",
    updatedAt: "2026-05-02",
  },
  {
    productCode: "NT-LUGU-TEA-001",
    originFarmName: "鹿谷山霧茶園",
    farmerName: "林秀芬",
    cultivationMethod: "高海拔茶園管理與焙茶工序示範",
    harvestWindow: "春茶、冬茶為主",
    certificationNote: "示範履歷資料，適合後續串接茶區故事來源",
    sourceUrl: "https://example.com/lugu-tea-traceability",
    updatedAt: "2026-05-02",
  },
  {
    productCode: "NT-CAOTUN-RICE-001",
    originFarmName: "草屯示範稻田",
    farmerName: "陳阿福",
    cultivationMethod: "灌溉系統與稻作週期教學示範",
    harvestWindow: "一期、二期稻作",
    certificationNote: "示範履歷資料，後續可接產地灌溉資料",
    sourceUrl: "https://example.com/caotun-rice-traceability",
    updatedAt: "2026-05-02",
  },
  {
    productCode: "NT-YUCHI-BLACKTEA-001",
    originFarmName: "魚池紅茶故事園",
    farmerName: "黃淑真",
    cultivationMethod: "茶園管理與揉捻製程導覽",
    harvestWindow: "春末到夏季",
    certificationNote: "示範履歷資料，後續可接地方觀光解說來源",
    sourceUrl: "https://example.com/yuchi-black-tea-traceability",
    updatedAt: "2026-05-02",
  },
];

export const publishedProducts = products.filter((product) => product.isPublished);

export const featuredProducts = publishedProducts.slice(0, 3);

export const townshipHighlights: TownshipHighlight[] = townships
  .map((township) => ({
    ...township,
    productCount: publishedProducts.filter(
      (product) => product.townshipSlug === township.slug,
    ).length,
  }))
  .filter((township) => township.productCount > 0);

export function getProductBySlug(slug: string): Product | null {
  return publishedProducts.find((product) => product.slug === slug) ?? null;
}

export function getProductByCode(productCode: string): Product | null {
  return publishedProducts.find((product) => product.productCode === productCode) ?? null;
}

export function resolveProductPathByCode(productCode: string): string | null {
  const product = getProductByCode(productCode);

  return product ? `/products/${product.slug}` : null;
}

export function getTraceabilityByProductCode(
  productCode: string,
): TraceabilityRecord | null {
  return traceabilityRecords.find((record) => record.productCode === productCode) ?? null;
}
