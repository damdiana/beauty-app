import { Category } from "@/services/types";
import { db } from "@vercel/postgres";

async function getCategory(categoryId: string): Promise<Category | undefined> {
  const client = await db.connect();
  const categoryResult = await client.sql`
    SELECT *
    FROM categories
    WHERE id = ${categoryId}
  `;

  const categoryRow = categoryResult.rows[0];

  if (!categoryRow) {
    return undefined;
  }
  return categoryRow as Category;
}

export { getCategory };
