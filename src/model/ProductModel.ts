import { Product } from "@/services/ProductAPI";
import { db } from "@vercel/postgres";

async function getProduct(productId: string): Promise<Product | undefined> {
  const client = await db.connect();

  const [productResponse, imagesResponse] = await Promise.all([
    client.sql`SELECT
      products.id,
      products.brand_id,
      brands.name as "brand_name",
      products.name,
      products.description,
      products.ingredients,
      products.categ_id,
      categories.name as "category_name"
  FROM products
  INNER JOIN brands ON products.brand_id = brands.id
  INNER JOIN categories ON products.categ_id = categories.id
  WHERE products.id = ${productId};
`,
    client.sql`SELECT
	    products.id,
	    products.name,
	    productimages.image
    FROM products
    INNER JOIN productimages ON products.id = productimages.product_id
    WHERE products.id = ${productId};`,
  ]);

  const productRows = productResponse.rows;
  const productImagesRows = imagesResponse.rows;

  if (productRows.length === 0) {
    return undefined;
  }

  productRows[0].images = productImagesRows.map(
    (productImage) => productImage.image
  );

  return productRows[0] as Product;
}

async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  const client = await db.connect();
  const products = await client.sql` 
  SELECT
  products.id,
  products.brand_id,
  brands.name as "brand_name",
  products.name,
  products.description,
  products.ingredients,
  products.categ_id,
  categories.name as "category_name",
  productimages.image
FROM products
INNER JOIN brands ON products.brand_id = brands.id
INNER JOIN categories ON products.categ_id = categories.id
INNER JOIN productimages ON products.id = productimages.product_id
WHERE categ_id = ${categoryId}`;

  const productRows = products.rows as (Omit<Product, "images"> & {
    image: string;
  })[];
  const productsWithImages: Record<string, Product> = {};

  productRows.forEach((productRow) => {
    const productId = productRow.id;
    if (!productsWithImages[productId]) {
      productsWithImages[productId] = {
        ...productRow,
        images: [],
      };
    }
    productsWithImages[productId].images.push(productRow.image);
  });

  const productsArray = Object.values(productsWithImages);

  return productsArray as Product[];
}

export { getProduct, getProductsByCategory };
