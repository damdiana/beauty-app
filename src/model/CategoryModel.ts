import { getPostgresClient } from "@/services/server/database";
import { Category } from "@/services/types";

async function getCategory(categoryId: number): Promise<Category | undefined> {
  const client = await getPostgresClient();
  const categoryResult = await client.query(
    `
    SELECT *
    FROM categories
    WHERE id = $1
  `,
    [categoryId]
  );

  const categoryRow = categoryResult.rows[0];

  if (!categoryRow) {
    return undefined;
  }
  return categoryRow as Category;
}

async function getCategories(): Promise<Category[]> {
  const client = await getPostgresClient();
  const categoryResult = await client.query(
    `
    SELECT *
    FROM categories
  `,
    []
  );
  const categoryRows = categoryResult.rows;

  return categoryRows as Category[];
}

export { getCategory, getCategories };
