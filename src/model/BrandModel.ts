import { getPostgresClient } from "@/services/server/database";
import { Brand } from "@/services/types";

async function getBrand(brandId: number): Promise<Brand | undefined> {
  const client = await getPostgresClient();
  const categoryResult = await client.query(
    `
      SELECT *
      FROM brands
      WHERE id = $1
    `,
    [brandId]
  );

  const brandRow = categoryResult.rows[0];

  if (!brandRow) {
    return undefined;
  }
  return brandRow as Brand;
}

async function getBrands(): Promise<Brand[]> {
  const client = await getPostgresClient();
  const categoryResult = await client.query(
    `
      SELECT *
      FROM brands
    `,
    []
  );
  const brandRows = categoryResult.rows;

  return brandRows as Brand[];
}

export { getBrand, getBrands };
