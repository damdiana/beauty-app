// This file creates the database tables and inserts the products along with
// all the details, such as brand name and product images.

import { db } from "@vercel/postgres";
import * as dotenv from "dotenv";
dotenv.config({
  path: ".env.development.local",
});

const client = await db.connect();

// createProductsTable();
await fetchAndInsertProducts("mask");
await fetchAndInsertProducts("eyes");
await fetchAndInsertProducts("facecream");
await fetchAndInsertProducts("toner");
await fetchAndInsertProducts("serum");
await fetchAndInsertProducts("clenser");
await fetchAndInsertProducts("lips");
// createProductImagesTable();

async function fetchAndInsertProducts(query) {
  const url = `https://sephora.p.rapidapi.com/products/v2/list?number=1&size=30&country=AU&language=en-AU&query=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.SEPHORA_API_KEY,
      "X-RapidAPI-Host": "sephora.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(`Got ${result.included.length} products.`);

    const myObjects = result.data
      .filter((product) => product.type === "products")
      .map((product) => fromSephoraObject(product));
    let alreadyInsertedBrandIds = [];
    myObjects.forEach((product) => {
      console.log("Starting");
      insertProduct(
        product.id,
        product.brand_id,
        product.name,
        product.description,
        product.ingredients
      );
      product.images.forEach((image) => {
        insertImage(product.id, image);
      });
      if (!alreadyInsertedBrandIds.includes(product.brand_id)) {
        alreadyInsertedBrandIds.push(product.brand_id);
        insertBrand(product.brand_id, product.brand_name);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function fromSephoraObject(sephoraProduct) {
  console.log(sephoraProduct.attributes.name);
  return {
    id: sephoraProduct.id,
    brand_id: sephoraProduct.relationships.brand.data.id,
    name: sephoraProduct.attributes.name,
    description: sephoraProduct.attributes.description,
    ingredients: sephoraProduct.attributes.ingredients,
    images: sephoraProduct.attributes["image-urls"],
    brand_name: sephoraProduct.attributes["brand-name"],
  };
}

async function insertProduct(id, brand_id, name, description, ingredients) {
  try {
    await client.sql`
      INSERT INTO Products (
        id,
        brand_id,
        name,
        description,
        ingredients
      )
      VALUES (${id}, ${brand_id}, ${name}, ${description}, ${ingredients});
    `;
    console.log(`Successfully inserted product ${name}`);
  } catch (error) {
    console.error(error);
  }
}

async function insertImage(product_id, image) {
  try {
    await client.sql`
      INSERT INTO ProductImages (
        product_id,
        image
        
      )
      VALUES (${product_id}, ${image});
    `;
    console.log(`Successfuly inserted ${product_id} image`);
  } catch (error) {
    console.error(error);
  }
}

async function insertBrand(id, name) {
  try {
    await client.sql`
      INSERT INTO Brands (
        id,
        name
      )
      VALUES (${id}, ${name});
    `;
    console.log(`Successfully inserted brand ${name}`);
  } catch (error) {
    console.error(error);
  }
}

async function createProductsTable() {
  const client = await db.connect();

  try {
    await client.sql`
      CREATE TABLE Products (
        id VARCHAR(10) PRIMARY KEY,
        brand_id VARCHAR(255),
        name VARCHAR(255),
        description TEXT,
        ingredients TEXT
      );`;
    console.log("Succes!");
  } catch (error) {
    console.error(error);
  }
}

async function createProductImagesTable() {
  const client = await db.connect();

  try {
    await client.sql`
      CREATE TABLE ProductImages (
        id SERIAL PRIMARY KEY,
        product_id VARCHAR(10),
        image VARCHAR(255)
       
      );`;
    console.log("Succes!");
  } catch (error) {
    console.error(error);
  }
}

async function createBrandsTabel() {
  const client = await db.connect();

  try {
    await client.sql`
      CREATE TABLE Brands (
        id VARCHAR(10) PRIMARY KEY,
        name VARCHAR(255)
      );`;
    console.log("Succes!");
  } catch (error) {
    console.error(error);
  }
}
