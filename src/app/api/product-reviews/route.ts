import { response200, response400, response409 } from "@/app/utils";
import { getProduct } from "@/model/ProductModel";
import {
  getProductReviewByUser,
  insertReview,
} from "@/model/ProductReviewsModel";
import { z } from "zod";

const requestType = z.object({
  product_id: z.string(),
  review: z.string(),
  title: z.string(),
  rating: z.number().max(5).min(1),
  recommending: z.boolean(),
});

export async function POST(request: Request) {
  let body = undefined;
  try {
    body = await request.json();
  } catch (err) {
    return response400("Incorect format");
  }
  const results = requestType.safeParse(body);
  if (!results.success!) {
    return response400("Incorect format");
  }
  const parsedBody = results.data;

  try {
    let product = await getProduct(parsedBody.product_id);
    if (product === undefined) {
      return response400("There is no product with this ID");
    }
    const parsedBodyWithUserDetails: z.infer<typeof requestType> & {
      user_id: string;
      product_name: string;
    } = {
      ...parsedBody,
      // IMPORTANT: this is hardcoded because we don't yet have user management.
      // TO BE DELETED once we integrate authentication
      user_id: "Diana13",
      product_name: "test",
    };

    let review = await getProductReviewByUser(
      parsedBodyWithUserDetails.user_id,
      parsedBodyWithUserDetails.product_id
    );
    if (review === undefined) {
      await insertReview(parsedBodyWithUserDetails);
      const insertedReview = await getProductReviewByUser(
        parsedBodyWithUserDetails.user_id,
        parsedBodyWithUserDetails.product_id
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
