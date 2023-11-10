import pg from "pg";
import * as dotenv from "dotenv";
dotenv.config({
  path: ".env.local",
});

const client = new pg.Client({
  connectionString: process.env.POSTGRES_URL,
});
await client.connect();

async function fetchImageProductForCategory(categId) {
  const url = `https://sephora.p.rapidapi.com/products/v2/list?number=1&size=1&category=${categId}`;

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

    if (result.data && result.data.length > 0) {
      const product = fromSephoraObject(result.data[0]);
      console.log(`Fetched product for category ${categId}`);
      return product.images[0];
    } else {
      console.log(`No product found for category ${categId}`, result.message);
      return undefined;
    }
  } catch (error) {
    console.error(error);
  }
}

async function updateImageForCategory(imageUrl, categoryId) {
  try {
    await client.query(
      `
    UPDATE Categories 
    SET image = $1 
    WHERE id = $2`,
      [imageUrl, categoryId]
    ),
      console.log(`Image updated for category ${categoryId}`);
  } catch (error) {
    console.error(`Error updating image for category ${categoryId}:`, error);
  }
}

async function getCategoryIds() {
  const categoryResponse = await client.query(`SELECT id FROM categories`, []);
  const categoryIds = categoryResponse.rows.map((categId) => {
    return categId.id;
  });
  return categoryIds;
}

async function insertImageIntoCategories() {
  const categoryIds = await getCategoryIds();

  for (let i = 0; i < categoryIds.length; i++) {
    const categId = categoryIds[i];
    const productImage = await fetchImageProductForCategory(categId);
    if (productImage) {
      console.log("Starting to insert image for category", categId);
      await updateImageForCategory(productImage, categId);
    } else {
      console.log("There is no image for this category");
    }
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

insertImageIntoCategories();
