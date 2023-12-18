import BrandPage from "@/components/BrandPage/BrandPage";
import ProductGallery from "@/components/ProductGallery";
import { getBrand } from "@/model/BrandModel";
import { getFavorites } from "@/model/FavoriteProductsModel";
import { getProducts } from "@/model/ProductModel";
import { Product } from "@/services/ProductAPI";
import getUserServerSide from "@/services/server/UserService";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { brandId: number };
}): Promise<Metadata> {
  let brand = await getBrand(params.brandId);

  if (brand === undefined) {
    return {
      title: "Not found!",
    };
  }
  return {
    title: brand.name,
  };
}

export default async function Page({
  params,
}: {
  params: { brandId: number };
}) {
  let user = undefined;
  let products: Product[] = [];
  let brand = undefined;

  try {
    [products, brand, user] = await Promise.all([
      getProducts({
        brandId: params.brandId,
      }),
      getBrand(params.brandId),
      getUserServerSide(),
    ]);
  } catch (err) {
    return (
      <BrandPage user={user}>
        <p className="m-2 text-center">
          An unexpected error occurred. Please try again later.
        </p>
      </BrandPage>
    );
  }
  let favoriteProductsIds: string[] = [];

  if (brand === undefined) {
    return notFound();
  }

  if (products.length === 0) {
    return (
      <BrandPage user={user}>
        <p className="font-bold text-center text-xl"> {brand.name}</p>
        <p className="m-2 text-center">There are no products for this brand</p>
      </BrandPage>
    );
  }

  let ableToGetFavorites: boolean = true;
  if (user !== undefined) {
    try {
      let favorites = await getFavorites(user.id);
      favoriteProductsIds = favorites.map((favorite) => favorite.id);
    } catch (err) {
      ableToGetFavorites = false;
    }
  }

  return (
    <div>
      <BrandPage user={user}>
        <p className="font-bold text-center text-xl"> {brand.name}</p>
        {ableToGetFavorites === false && (
          <p className="text-center"> Unable to get favorite products </p>
        )}
        <div className="grid card-grid-cols-3 mt-4 gap-4">
          <ProductGallery
            products={products}
            initialFavorites={favoriteProductsIds}
          />
        </div>
      </BrandPage>
    </div>
  );
}
