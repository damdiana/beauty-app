import { getPostgresClient } from "@/services/server/database";

export type ProductReview = {
  id: string;
  user_id: string;
  product_id: string;
  product_name: string;
  review: string;
  rating: number;
  // gender: string;
  // age: string;
  // skintype: string;
  added_at: string;
  title: string;
  recommending: boolean;
};

async function insertReview(
  productReview: Omit<ProductReview, "id" | "added_at">
) {
  const client = await getPostgresClient();
  await client.query(
    `
    INSERT INTO ProductReviews (
        user_id, product_id, product_name, title, review, rating, recommending 
      )
      VALUES ($1, $2, $3, $4, $5,$6, $7)`,
    [
      productReview.user_id,
      productReview.product_id,
      productReview.product_name,
      productReview.title,
      productReview.review,
      productReview.rating,
      productReview.recommending,
    ]
  );
}

async function getProductReviewByUser(
  user_id: string,
  product_id: string
): Promise<ProductReview | undefined> {
  const client = await getPostgresClient();
  let response = await client.query(
    `
    SELECT *
    FROM ProductReviews
    WHERE user_id = $1 AND product_id = $2`,
    [user_id, product_id]
  );

  if (response.rows.length === 0) {
    return undefined;
  }
  return response.rows[0] as ProductReview;
}

async function getProductsReviewsByUser(
  user_id: string
): Promise<ProductReview[]> {
  const client = await getPostgresClient();
  let response = await client.query(
    `
      SELECT *
      FROM ProductReviews
      WHERE user_id = $1`,
    [user_id]
  );
  return response.rows as ProductReview[];
}

async function getProductReviews(product_id: string): Promise<ProductReview[]> {
  const client = await getPostgresClient();
  let response = await client.query(
    `
    SELECT  * 
    FROM ProductReviews
    WHERE
        product_id = $1`,
    [product_id]
  );
  return response.rows as ProductReview[];
}

export {
  insertReview,
  getProductReviewByUser,
  getProductReviews,
  getProductsReviewsByUser,
};
