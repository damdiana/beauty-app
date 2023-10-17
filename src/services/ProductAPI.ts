import { BASE_URL } from "@/Constants";

export type Product = {
  id: string;
  brand_id: string;
  name: string;
  brand_name: string;
  description: string;
  ingredients: string;
  categ_id: string;
  category_name: string;
  images: string[];
};

async function fetchProducts(): Promise<
  | {
      ok: true;
      products: Product[];
    }
  | {
      ok: false;
      message: string;
    }
> {
  let resp = await fetch(`${BASE_URL}/api/products`, {
    cache: "no-store",
  });
  if (resp.ok) {
    let { data }: { data: Product[] } = await resp.json();
    return {
      ok: true,
      products: data,
    };
  } else {
    let jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  }
}

async function fetchProduct(productId: string): Promise<
  | {
      ok: true;
      product: Product;
    }
  | {
      ok: false;
      message: string;
    }
> {
  let resp = await fetch(`${BASE_URL}/api/products/${productId}`, {
    cache: "no-store",
  });
  if (resp.ok) {
    let { data }: { data: Product } = await resp.json();
    return {
      ok: true,
      product: data,
    };
  } else {
    let jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  }
}

async function fetchProductsByCategory(categoryId: string): Promise<
  | {
      ok: true;
      products: Product[];
    }
  | {
      ok: false;
      message: string;
    }
> {
  let resp = await fetch(`${BASE_URL}/api/categories/${categoryId}`, {
    cache: "no-store",
  });
  if (resp.ok) {
    let response = await resp.json();
    return {
      ok: true,
      products: response.products,
    };
  } else {
    let jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  }
}

export { fetchProducts, fetchProductsByCategory, fetchProduct };
