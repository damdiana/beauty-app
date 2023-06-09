import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { productId: string };
  }
) {
  try {
    const client = await db.connect();

    const [productResponse, imagesResponse] = await Promise.all([
      client.sql`SELECT
      products.id,
      products.brand_id,
      brands.name as "brand_name",
      products.name,
      products.description,
      products.ingredients
  FROM products
  INNER JOIN brands ON products.brand_id = brands.id
  WHERE products.id = ${params.productId};
`,
      client.sql`SELECT
	    products.id,
	    products.name,
	    productimages.image
    FROM products
    INNER JOIN productimages ON products.id = productimages.product_id
    WHERE products.id = ${params.productId};`,
    ]);

    const productRows = productResponse.rows;
    const productImagesRows = imagesResponse.rows;

    if (productRows.length === 0) {
      return NextResponse.json(
        {
          message: "Product not found.",
        },
        {
          status: 404,
        }
      );
    }

    productRows[0].images = productImagesRows.map(
      (productImage) => productImage.image
    );

    return NextResponse.json({
      data: productRows[0],
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        message: "Interal server error",
      },
      {
        status: 500,
      }
    );
  }
}
