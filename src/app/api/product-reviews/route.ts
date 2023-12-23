import {
  response200,
  response400,
  response401,
  response409,
  response500,
} from "@/app/utils";
import { getProduct } from "@/model/ProductModel";
import {
  getProductReviewByUser,
  insertReview,
} from "@/model/ProductReviewsModel";
import getUserServerSide from "@/services/server/UserService";
import { parseJsonFromBody } from "@/services/utils";
import { z } from "zod";

const requestType = z.object({
  product_id: z.string(),
  review: z.string(),
  title: z.string(),
  rating: z.number().max(5).min(1),
  recommending: z.boolean(),
});

export async function POST(request: Request) {
  try {
    const user = await getUserServerSide();
    if (user === undefined) {
      return response401("User not logged in");
    }
    const jsonResult = await parseJsonFromBody(request);
    if (jsonResult.ok === false) {
      return response400(jsonResult.message);
    }
    const results = requestType.safeParse(jsonResult.data);
    if (!results.success!) {
      return response400("Incorect format");
    }
    const parsedBody = results.data;

    let product = await getProduct(parsedBody.product_id);
    if (product === undefined) {
      return response400("There is no product with this ID");
    }

    let review = await getProductReviewByUser(user.id, product.id);
    const reviewData = {
      ...parsedBody,
      user_id: user.id,
      full_name: user.fullName,
      product_name: product.name,
    };

    if (review !== undefined) {
      return response409("You can only add one review per product.");
    }
    await insertReview(reviewData);
    const insertedReview = await getProductReviewByUser(user.id, product.id);
    return response200({
      message: "Review added in the database.",
      product_review: insertedReview,
    });
  } catch (err) {
    console.error(err);
    return response400("Unable to add review");
  }
}
