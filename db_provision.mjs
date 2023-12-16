// This file creates the database tables and inserts the products along with
// all the details, such as brand name and product images.

import pg from "pg";
import * as dotenv from "dotenv";
dotenv.config({
  path: ".env.local",
});

const DRY_RUN = false;

const client = new pg.Client({
  connectionString: process.env.POSTGRES_URL,
});
await client.connect();

const categoryIds = await fetchAndInsertCategories();
categoryIds.forEach((categId) => {
  fetchAndInsertProducts(categId);
});

async function fetchAndInsertCategories() {
  const url = "https://sephora.p.rapidapi.com/categories/v2/list";
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
    let myCategories = result.data;

    // We don't want all categories. Just a few
    // of them to have enough "real" data for our app
    myCategories = myCategories.slice(0, 30);

    const categoryIds = await Promise.all(
      myCategories.map((category) =>
        insertCategory(
          category.id,
          category.attributes.label,
          category.attributes["slug-url"]
        )
      )
    );

    return categoryIds;
  } catch (error) {
    console.error(error);
  }
}

async function fetchAndInsertProducts(categId) {
  const url = `https://sephora.p.rapidapi.com/products/v2/list?number=1&size=30&category=${categId}`;

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
      .map((product) => {
        const brand_name =
          result.included.find(
            (item) =>
              item.type === "brands" &&
              item.id === product.relationships.brand.data.id
          )?.attributes?.name ?? "unknown brand";
        return fromSephoraObject(product, brand_name);
      });
    let alreadyInsertedBrandIds = [];
    myObjects.forEach((product) => {
      console.log("Starting");
      insertProduct(
        product.id,
        product.brand_id,
        product.name,
        categId,
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

function fromSephoraObject(sephoraProduct, brand_name) {
  console.log(sephoraProduct.attributes.name);
  return {
    id: sephoraProduct.id,
    brand_id: sephoraProduct.relationships.brand.data.id,
    name: sephoraProduct.attributes.name,
    description: sephoraProduct.attributes.description,
    ingredients: sephoraProduct.attributes.ingredients,
    images: sephoraProduct.attributes["image-urls"],
    brand_name,
  };
}

async function insertCategory(id, name, slug) {
  if (DRY_RUN) {
    console.log(
      `>>>>> About to insert categ_id: ${id}, categ_name: ${name}, categ_slug: ${slug}`
    );
    return id;
  }
  try {
    await client.query(
      `
    INSERT INTO Categories (
      id,
      name,
      slug
    )
    VALUES ($1, $2, $3);
  `,
      [id, name, slug]
    );
    console.log(`Successfully inserted category ${name}`);
    return id;
  } catch (error) {
    console.log(`Failed to insert category with id:${id}`, error);
  }
}

async function insertProduct(
  id,
  brand_id,
  name,
  categ_id,
  description,
  ingredients
) {
  if (DRY_RUN) {
    console.log(
      `>>>>>  About to insert: product_id= ${id}, brand_id: ${brand_id}, product_name:${name}, categ_id: ${categ_id}. No description because it's too long. No ingredients because they are too long`
    );
    return;
  }
  try {
    await client.query(
      ` INSERT INTO Products (
      id,
      brand_id,
      name,
      categ_id,
      description,
      ingredients
    )
    VALUES ($1, $2, $3, $4, $5, $6);
  `,
      [id, brand_id, name, categ_id, description, ingredients]
    );
    console.log(
      `Successfully inserted product ${name} with category ${categ_id}`
    );
  } catch (error) {
    console.error(error);
  }
}

async function insertImage(product_id, image) {
  if (DRY_RUN) {
    return;
  }
  try {
    await client.query(
      `
      INSERT INTO ProductImages (
        product_id,
        image
        
      )
      VALUES ($1, $2);
    `,
      [product_id, image]
    );
    console.log(`Successfuly inserted ${product_id} image`);
  } catch (error) {
    console.error(error);
  }
}

async function insertBrand(id, name) {
  if (DRY_RUN) {
    console.log(` >>>>>  About to insert brand_id: ${id},brand_name: ${name}`);
    return;
  }
  try {
    await client.query(
      `
      INSERT INTO Brands (
        id,
        name
      )
      VALUES ($1, $2);
    `,
      [id, name]
    );
    console.log(`Successfully inserted brand ${name}`);
  } catch (error) {
    console.error(error);
  }
}
