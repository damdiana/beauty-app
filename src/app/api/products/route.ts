import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const client = await db.connect();
    const { rows: productRows } = await client.sql`SELECT
        products.id,
        products.brand_id,
        brands.name as "brand_name",
        products.name,
        products.description,
        products.ingredients
    FROM products
    INNER JOIN brands ON products.brand_id = brands.id;
`;

    const { rows: productImagesRows } = await client.sql`SELECT
	    products.id,
	    products.name,
	    productimages.image
    FROM products
    INNER JOIN productimages ON products.id = productimages.product_id;`;

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
