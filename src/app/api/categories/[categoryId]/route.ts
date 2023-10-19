import {
  response200,
  response400,
  response404,
  response500,
} from "@/app/utils";
import { getCategory } from "@/model/CategoryModel";
import { getProducts } from "@/model/ProductModel";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { categoryId: string };
  }
) {
  try {
    let category = await getCategory(params.categoryId);
    if (!category) {
      return response404("Category not found");
    }

    let products = await getProducts(params.categoryId);

    return response200({ products });
  } catch (err) {
    console.error(err);
    return response500("Interal server error");
  }
}
