export type Product = {
  id: string;
  brand_id: string;
  name: string;
  brand_name: string;
  description: string;
  ingredients: string;
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
  let resp = await fetch(`http://${process.env.VERCEL_URL}/api/products`);
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
  let resp = await fetch(
    `http://${process.env.VERCEL_URL}/api/products/${productId}`
  );
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

export { fetchProducts, fetchProduct };
