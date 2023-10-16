import { response200, response400, response409 } from "@/app/utils";
import { getProduct } from "@/model/ProductModel";
import {
  getProductReviewByUser,
  insertReview,
} from "@/model/ProductReviewsModel";

export async function POST(request: Request) {
  let body = undefined;
  try {
    body = await request.json();
  } catch (err) {
    return response400("Incorect format");
  }
  if (
    typeof body.product_id !== "string" ||
    typeof body.review !== "string" ||
    typeof body.title !== "string" ||
    typeof body.rating !== "number" ||
    typeof body.recommending !== "boolean"
  ) {
    return response400("Incorect format");
  }

  if (body.rating > 5) {
    return response400("Rating maximum of 5");
  }

  try {
    let product = await getProduct(body.product_id);
    if (product === undefined) {
      return response400("There is no product with this ID");
    }
    let review = await getProductReviewByUser(body.user_id, body.product_id);
    if (review === undefined) {
      // IMPORTANT: this is hardcoded because we don't yet have user management.
      // TO BE DELETED once we integrate authentication
      body.user_id = "Diana13";
      body.product_name = "test";
      await insertReview(body);
      const insertedReview = await getProductReviewByUser(
        body.user_id,
        body.product_id
      );
      return response200({
        message: "Review added in the database.",
        product_review: insertedReview,
      });
    } else {
      return response409("You can only add one review per product.");
    }
  } catch (err) {
    console.error(err);
    return response400("Unable to add review");
  }
}
