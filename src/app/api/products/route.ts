import { response200, response500 } from "@/app/utils";
import { getProducts } from "@/model/ProductModel";

export async function GET(request: Request) {
  try {
    let products = await getProducts();
    return response200({ products });
  } catch (err) {
    console.error(err);
    return response500("Interal server error");
  }
}
