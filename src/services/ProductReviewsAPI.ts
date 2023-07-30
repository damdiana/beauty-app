import { ProductReview } from "@/model/ProductReviewsModel";

async function fetchProductReviews(product_Id: string): Promise<
  | {
      ok: true;
      productReviews: ProductReview[];
    }
  | {
      ok: false;
      message: string;
    }
> {
  let resp = await fetch(
    `http://${process.env.VERCEL_URL}/api/product-reviews/${product_Id}`,
    {
      cache: "no-store",
    }
  );
  if (resp.ok) {
    let { reviews }: { reviews: ProductReview[] } = await resp.json();
    return {
      ok: true,
      productReviews: reviews,
    };
  } else {
    let jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  }
}

export { fetchProductReviews };
