import {
  response200,
  response401,
  response404,
  response500,
} from "@/app/utils";
import { addFavorite, removeFavorite } from "@/model/FavoriteProductsModel";
import { getProduct } from "@/model/ProductModel";
import getUserServerSide from "@/services/server/UserService";

export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: { productId: string };
  }
) {
  let user = await getUserServerSide();

  if (user === undefined) {
    return response401("User not logged in ");
  }

  try {
    let product = await getProduct(params.productId);
    if (product === undefined) {
      return response404("There is no product with this ID");
    }

    await addFavorite(user.id, params.productId);
    return response200({ product, message: "Product added to favorites" });
  } catch (err) {
    return response500("Unable to add the product to favorites");
  }
}

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: { productId: string };
  }
) {
  let user = await getUserServerSide();

  if (user === undefined) {
    return response401("User not logged in ");
  }

  try {
    let product = await getProduct(params.productId);
    if (product === undefined) {
      return response404("There is no product with this ID");
    }
    await removeFavorite(user.id, params.productId);
    return response200({
      message: "Product removed from favorites",
    });
  } catch (err) {
    return response500("Unable to remove the product from favorites");
  }
}
