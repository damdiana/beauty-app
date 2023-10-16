import { response200, response400, response500 } from "@/app/utils";
import { getProduct } from "@/model/ProductModel";
import { getProductReviews } from "@/model/ProductReviewsModel";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  try {
    let product = await getProduct(productId);
    if (product === undefined) {
      return response400("There is no product with this ID");
    }
    let reviews = await getProductReviews(productId);
    if (reviews !== undefined) {
      return response200({ reviews });
    } else {
      return response400("There are no reviews");
    }
  } catch (err) {
    console.error(err);
    return response500("Interal server error");
  }
}
