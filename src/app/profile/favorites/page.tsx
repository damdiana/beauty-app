import FavoriteProductGallery from "@/components/FavoriteProductsGallery";
import { getFavorites } from "@/model/FavoriteProductsModel";
import { getProducts } from "@/model/ProductModel";
import { Product } from "@/services/ProductAPI";
import getUserServerSide from "@/services/server/UserService";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

async function Favorites() {
  const user = await getUserServerSide();
  let favorites: Product[] = [];

  if (user !== undefined) {
    // any user that is not logged in and tries to access a /profile page
    // will be redirected to the login page. (code in app/profile/layout.tsx)
    // that's why we don't have specific redirect code in this component
    try {
      favorites = await getFavorites(user.id);
    } catch (err) {
      console.error("Failed to show favorite products", err);
    }
  }

  return (
    <div className="w-full h-full flex">
      <div className="m-2 p-1 border w-full flex flex-col  favorites-page ">
        <h2 className="text-lg m-2">
          Your favorite products
          <FontAwesomeIcon icon={faHeart} className="ml-1 h-5 w-5" />
        </h2>
        <div className="grid card-grid-cols-5 mt-4 gap-4">
          <FavoriteProductGallery favoriteProducts={favorites} />
        </div>
      </div>
    </div>
  );
}

export default Favorites;
