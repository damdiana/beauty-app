import { response200, response500 } from "@/app/utils";
import { getCategories } from "@/model/CategoryModel";

export async function GET(request: Request) {
  try {
    let categories = await getCategories();

    return response200(categories);
  } catch (err) {
    console.error(err);
    return response500("Interal server error");
  }
}
