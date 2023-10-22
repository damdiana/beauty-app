import { getPostgresClient } from "@/services/server/database";
import { Category } from "@/services/types";

async function getCategory(categoryId: string): Promise<Category | undefined> {
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

export { getCategory };
