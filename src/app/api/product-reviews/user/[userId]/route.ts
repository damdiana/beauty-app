import { response200, response500 } from "@/app/utils";
import { getProductsReviewsByUser } from "@/model/ProductReviewsModel";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  try {
    let reviews = await getProductsReviewsByUser(userId);
    return response200({ reviews });
  } catch (err) {
    console.error(err);
    return response500("Interal server error");
  }
}
