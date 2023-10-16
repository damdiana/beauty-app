import { response500 } from "@/app/utils";
import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const client = await db.connect();

    const [productsResponse, imagesResponse] = await Promise.all([
      client.sql`SELECT
      products.id,
      products.brand_id,
      brands.name as "brand_name",
      products.name,
      products.description,
      products.ingredients
  FROM products
  INNER JOIN brands ON products.brand_id = brands.id;
`,
      client.sql`SELECT
	    products.id,
	    products.name,
	    productimages.image
    FROM products
    INNER JOIN productimages ON products.id = productimages.product_id;`,
    ]);

    const productRows = productsResponse.rows;
    const productImagesRows = imagesResponse.rows;

    productRows.forEach((productRow) => {
      productRow.images = [];

      productImagesRows.forEach((imageRow) => {
        if (imageRow.id === productRow.id) {
          productRow.images.push(imageRow.image);
        }
      });
    });

    return NextResponse.json({
      data: productRows,
    });
  } catch (err) {
    console.error(err);
    return response500("Interal server error");
  }
}
