import { BASE_URL } from "@/Constants";
import { Product } from "./ProductAPI";

async function fetchFavorites(): Promise<
  | {
      ok: true;
      favorites: Product[];
    }
  | {
      ok: false;
      message: string;
    }
> {
  let resp = await fetch(`${BASE_URL}/api/products/favorite-products`, {
    cache: "no-store",
  });
  if (resp.ok) {
    let { favorites }: { favorites: Product[] } = await resp.json();
    return {
      ok: true,
      favorites: favorites,
    };
  } else {
    let jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  }
}

async function postFavoriteProduct(productId: string): Promise<
  | {
      ok: true;
      product: Product;
      message: string;
    }
  | {
      ok: false;
      message: string;
    }
> {
  let resp = await fetch(
    `${BASE_URL}/api/products/favorite-products/${productId}`,
    {
      method: "PUT",
      cache: "no-store",
    }
  );
  if (resp.ok) {
    let jsonResp = await resp.json();
    return {
      ok: true,
      product: jsonResp.product,
      message: jsonResp.message,
    };
  } else {
    let jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  }
}

async function deleteFavoriteProduct(productId: string): Promise<
  | {
      ok: true;
      message: string;
    }
  | {
      ok: false;
      message: string;
    }
> {
  let resp = await fetch(
    `${BASE_URL}/api/products/favorite-products/${productId}`,
    {
      method: "DELETE",
      cache: "no-store",
    }
  );
  if (resp.ok) {
    let jsonResp = await resp.json();
    return {
      ok: true,
      message: jsonResp.message,
    };
  } else {
    let jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  }
}

export { fetchFavorites, postFavoriteProduct, deleteFavoriteProduct };
