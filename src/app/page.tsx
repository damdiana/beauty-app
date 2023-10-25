import { HEADER_NAV } from "@/Constants";
import Header from "@/components/Header/Header";
import ProductGallery from "@/components/ProductGallery";
import { getFavorites } from "@/model/FavoriteProductsModel";
import { getProducts } from "@/model/ProductModel";
import { Product } from "@/services/ProductAPI";
import getUserServerSide from "@/services/server/UserService";

export default async function Home() {
  const user = await getUserServerSide();
  let products: Product[] = [];
  let favoriteProductsIds: string[] = [];
  if (user !== undefined) {
    try {
      let favorites = await getFavorites(user.id);
      favoriteProductsIds = favorites.map((favorite) => favorite.id);
    } catch (err) {
      console.error("Failed to show favorite products", err);
    }
  }

  try {
    products = await getProducts();
  } catch (err) {
    console.error("Failed to select products", err);
    return (
      <>
        <Header nav={HEADER_NAV} user={user} />
        <p className="m-2 text-center"> Failed to list products </p>
      </>
    );
  }
  return (
    <div>
      <Header nav={HEADER_NAV} user={user} />
      <div className="grid card-grid-cols-3 mt-4 gap-4">
        {products.length > 0 ? (
          <>
            <ProductGallery
              products={products}
              initialFavorites={favoriteProductsIds}
            />
          </>
        ) : (
          <p> No Products Yet </p>
        )}
      </div>
    </div>
  );
}
