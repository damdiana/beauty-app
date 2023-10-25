import CategoryPage from "@/components/CategoryPage/CategoryPage";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import { getCategory } from "@/model/CategoryModel";
import { getFavorites } from "@/model/FavoriteProductsModel";
import { getProducts } from "@/model/ProductModel";
import { Product } from "@/services/ProductAPI";
import getUserServerSide from "@/services/server/UserService";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { categoryId: string };
}): Promise<Metadata> {
  let category = await getCategory(params.categoryId);

  if (category === undefined) {
    return {
      title: "Not found!",
    };
  }
  return {
    title: category.name,
  };
}

export default async function Page({
  params,
}: {
  params: { categoryId: string };
}) {
  const user = await getUserServerSide();
  let products: Product[] = [];
  let category = undefined;

  try {
    [products, category] = await Promise.all([
      getProducts(params.categoryId),
      getCategory(params.categoryId),
    ]);
  } catch (err) {
    console.error(err);
  }
  let favoriteProductsIds: string[] = [];

  if (category === undefined) {
    return notFound();
  }

  if (products.length === 0) {
    return (
      <CategoryPage user={user}>
        <p className="font-bold text-center text-xl"> {category.name}</p>
        <p className="m-2 text-center">
          There are no products for this category
        </p>
      </CategoryPage>
    );
  }

  if (user !== undefined) {
    try {
      let favorites = await getFavorites(user.id);
      favoriteProductsIds = favorites.map((favorite) => favorite.id);
    } catch (err) {
      console.error("Failed to show favorite products", err);
    }
  }

  return (
    <div>
      <CategoryPage user={user}>
        <p className="font-bold text-center text-xl"> {category.name}</p>
        <div className="grid card-grid-cols-3 mt-4 gap-4">
          <ProductGallery
            products={products}
            initialFavorites={favoriteProductsIds}
          />
        </div>
      </CategoryPage>
    </div>
  );
}
