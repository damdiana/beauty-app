import { HEADER_NAV } from "@/Constants";
import CategoryPage from "@/components/CategoryPage/CategoryPage";
import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import { getCategory } from "@/model/CategoryModel";
import { getProducts } from "@/model/ProductModel";
import { Product } from "@/services/ProductAPI";
import getUserServerSide from "@/services/server/UserService";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { categoryId: string };
}): Promise<Metadata> {
  let category = await getCategory(params.categoryId);

  if (category === undefined) {
    return {
      title: "Not found!",
    };
  }
  return {
    title: category.name,
  };
}

export default async function Page({
  params,
}: {
  params: { categoryId: string };
}) {
  const user = await getUserServerSide();

  let category = await getCategory(params.categoryId);
  if (category === undefined) {
    return notFound();
  }
  let products: Product[];
  try {
    products = await getProducts(params.categoryId);
    if (products.length === 0) {
      return (
        <CategoryPage user={user}>
          <p className="font-bold text-center text-xl"> {category.name}</p>
          <p className="m-2 text-center">
            There are no products for this category
          </p>
        </CategoryPage>
      );
    }
  } catch (err) {
    console.log("Failed to select products", err);
    return (
      <CategoryPage>
        <p className="m-2 text-center"> Failed to list products </p>
      </CategoryPage>
    );
  }

  return (
    <div>
      <CategoryPage>
        <p className="font-bold text-center text-xl"> {category.name}</p>
        <div className="grid card-grid-cols-3 mt-4 gap-4">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </CategoryPage>
    </div>
  );
}
