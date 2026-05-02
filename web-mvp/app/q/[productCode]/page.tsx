import { redirect } from "next/navigation";

import { resolveProductPathByCode } from "@/lib/products";

type QrPageProps = {
  params: Promise<{ productCode: string }>;
};

export default async function QrLandingPage({ params }: QrPageProps) {
  const { productCode } = await params;
  const path = resolveProductPathByCode(productCode);

  if (!path) {
    redirect("/products");
  }

  redirect(path);
}
