import { ProductReview } from "@/model/ProductReviewsModel";

export type ProductReviewPostPayload = {
  review: string;
  title: string;
  recommending: boolean;
  product_id: string;
  rating: number;
  added_at: string;
};

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

async function postProductReview(
  product_review: ProductReviewPostPayload
): Promise<
  | {
      ok: true;
      productReview: ProductReview;
    }
  | {
      ok: false;
      message: string;
    }
> {
  let resp = await fetch(
    `http://${process.env.VERCEL_URL}/api/product-reviews`,
    {
      method: "POST",
      body: JSON.stringify(product_review),
    }
  );
  if (resp.ok) {
    let { product_review }: { product_review: ProductReview } =
      await resp.json();
    return {
      ok: true,
      productReview: product_review,
    };
  } else {
    let jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  }
}

export { fetchProductReviews, postProductReview };
