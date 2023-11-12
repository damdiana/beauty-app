"use client";
import {
  deleteFavoriteProduct,
  postFavoriteProduct,
} from "@/services/FavoriteProductsAPI";
import { Product } from "@/services/ProductAPI";
import ProductCard from "./ProductCard/ProductCard";
import { useState } from "react";

type Props = {
  products: Product[];
  initialFavorites: string[];
};
const ProductGallery = ({ products, initialFavorites }: Props) => {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [productsWithErrors, setProductsWithErrors] = useState<string[]>([]);

  const addErrorToProduct = (id: string) => {
    setProductsWithErrors([...productsWithErrors, id]);
  };

  const removeErrorFromProduct = (id: string) => {
    productsWithErrors.filter((productWithError) => productWithError !== id);
  };

  const addToFavorites = async (id: string) => {
    try {
      removeErrorFromProduct(id);
      let resp = await postFavoriteProduct(id);
      if (resp.ok === true) {
        setFavorites((prevFavorites) => [...prevFavorites, id]);
      } else {
        addErrorToProduct(id);
      }
    } catch (error) {
      addErrorToProduct(id);
    }
  };

  const deleteFromFavorites = async (id: string) => {
    try {
      removeErrorFromProduct(id);
      let resp = await deleteFavoriteProduct(id);
      if (resp.ok === true) {
        setFavorites((prevFavorites) =>
          prevFavorites.filter((favId) => favId !== id)
        );
      } else {
        addErrorToProduct(id);
      }
    } catch (error) {
      addErrorToProduct(id);
    }
  };

  return (
    <>
      {products.map((product) => {
        return (
          <ProductCard
            hasError={productsWithErrors.includes(product.id)}
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onAdd={() => addToFavorites(product.id)}
            onDelete={() => deleteFromFavorites(product.id)}
          />
        );
      })}
    </>
  );
};

export default ProductGallery;
