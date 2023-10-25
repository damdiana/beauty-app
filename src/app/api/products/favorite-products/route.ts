import { response200, response401, response500 } from "@/app/utils";
import { getFavorites } from "@/model/FavoriteProductsModel";
import getUserServerSide from "@/services/server/UserService";

export async function GET(request: Request) {
  let user = await getUserServerSide();

  if (user === undefined) {
    return response401("User not logged in ");
  }

  try {
    let favorites = await getFavorites(user.id);
    return response200(favorites);
  } catch (err) {
    return response500("Interal server error");
  }
}
