"use client";
import {
  deleteFavoriteProduct,
  postFavoriteProduct,
} from "@/services/FavoriteProductsAPI";
import { Product } from "@/services/ProductAPI";
import ProductCard from "./ProductCard/ProductCard";
import { useState } from "react";

type Props = {
  favoriteProducts: Product[];
};
const FavoriteProductGallery = ({ favoriteProducts }: Props) => {
  const [favorites, setFavorites] = useState<Product[]>(favoriteProducts);
  const [productsWithErrors, setProductsWithErrors] = useState<string[]>([]);

  const addErrorToProduct = (id: string) => {
    setProductsWithErrors([...productsWithErrors, id]);
  };

  const removeErrorFromProduct = (id: string) => {
    productsWithErrors.filter((productWithError) => productWithError !== id);
  };

  const deleteFromFavorites = async (id: string) => {
    try {
      removeErrorFromProduct(id);
      await deleteFavoriteProduct(id);
      setFavorites(
        favorites.filter((favoriteProduct) => favoriteProduct.id !== id)
      );
    } catch (error) {
      addErrorToProduct(id);
    }
  };

  return (
    <>
      {favorites.map((favoriteProduct) => {
        return (
          <>
            <ProductCard
              key={favoriteProduct.id}
              product={favoriteProduct}
              hasError={productsWithErrors.includes(favoriteProduct.id)}
              isFavorite={true}
              onDelete={() => deleteFromFavorites(favoriteProduct.id)}
            />
          </>
        );
      })}
    </>
  );
};

export default FavoriteProductGallery;
