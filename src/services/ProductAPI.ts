export type Product = {
  id: string;
  brand_id: string;
  name: string;
  brand_name: string;
  description: string;
  ingredients?: string;
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
  let resp = await fetch(`http://${process.env.VERCEL_URL}/api/products`, {
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
      message: "Error",
    };
  }
}

export default fetchProducts;
