import { db } from "@vercel/postgres";

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
  const client = await db.connect();
  await client.sql`
    INSERT INTO ProductReviews (
        user_id, product_id, product_name, title, review, rating, recommending 
      )
      VALUES (${productReview.user_id}, ${productReview.product_id}, ${productReview.product_name}, ${productReview.title}, ${productReview.review},${productReview.rating}, ${productReview.recommending})`;
}

async function getProductReviewByUser(
  user_id: string,
  product_id: string
): Promise<ProductReview | undefined> {
  const client = await db.connect();
  let response = await client.sql`
    SELECT *
    FROM ProductReviews
    WHERE user_id = ${user_id} AND product_id = ${product_id}`;

  if (response.rows.length === 0) {
    return undefined;
  }
  return response.rows[0] as ProductReview;
}

async function getProductsReviewsByUser(
  user_id: string
): Promise<ProductReview[]> {
  const client = await db.connect();
  let response = await client.sql`
      SELECT *
      FROM ProductReviews
      WHERE user_id = ${user_id}`;
  return response.rows as ProductReview[];
}

async function getProductReviews(product_id: string): Promise<ProductReview[]> {
  const client = await db.connect();
  let response = await client.sql`
    SELECT  * 
    FROM ProductReviews
    WHERE
        product_id = ${product_id}`;
  return response.rows as ProductReview[];
}

export {
  insertReview,
  getProductReviewByUser,
  getProductReviews,
  getProductsReviewsByUser,
};
