import { response200, response404, response500 } from "@/app/utils";
import { getProduct } from "@/model/ProductModel";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { productId: string };
  }
) {
  try {
    let product = await getProduct(params.productId);
    if (product === undefined) {
      return response404("Product not found.");
    } else {
      return response200({
        data: product,
      });
    }
  } catch (err) {
    console.error(err);
    return response500("Interal server error");
  }
}
