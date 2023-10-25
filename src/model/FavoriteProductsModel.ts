import { Product } from "@/services/ProductAPI";
import { getPostgresClient } from "@/services/server/database";
import { getProducts } from "./ProductModel";
async function getFavorites(userId: number) {
  const client = await getPostgresClient();
  const favoriteProductsQuery = await client.query(
    `SELECT * FROM FavoriteProducts WHERE user_id=$1`,
    [userId]
  );
  const favoriteProductsIds = favoriteProductsQuery.rows.map(
    (row) => row.product_id
  );

  const allProducts = await getProducts();
  const favoriteProducts = allProducts.filter((product) =>
    favoriteProductsIds.includes(product.id)
  );

  return favoriteProducts;
}
async function addFavorite(userId: number, productId: string) {
  const client = await getPostgresClient();
  await client.query(
    `
    INSERT INTO FavoriteProducts (
        user_id,
        product_id)
        VALUES ($1, $2)`,
    [userId, productId]
  );
}
async function removeFavorite(userId: number, productId: string) {
  const client = await getPostgresClient();
  await client.query(
    `
    DELETE FROM FavoriteProducts
      WHERE user_id = $1 AND product_id = $2`,
    [userId, productId]
  );
}

export { getFavorites, addFavorite, removeFavorite };
