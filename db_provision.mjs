import { db } from "@vercel/postgres";
import * as dotenv from "dotenv";
dotenv.config({
  path: ".env.development.local",
});

// main();
insertProducts(
  "Serum",
  "Estee Lauder",
  "Advanced Night Repair",
  "awesome serum for your face"
);

async function insertProducts(name, brand, productName, productDescription) {
  const client = await db.connect();

  try {
    await client.sql`INSERT INTO Products ( Name, Brand, ProductName, ProductDescription) VALUES (${name}, ${brand}, ${productName}, ${productDescription});`;
    console.log("Succes!");
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const client = await db.connect();

  try {
    await client.sql`CREATE TABLE Products ( Name varchar(255), Brand varchar(255), ProductName varchar(255), ProductDescription varchar(2000) );`;
    console.log("Succes!");
  } catch (error) {
    console.error(error);
  }
}
