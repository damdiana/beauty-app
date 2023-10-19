import CategoryPage from "@/components/CategoryPage/CategoryPage";
import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import { getProducts } from "@/model/ProductModel";
export default async function Home() {
  let products;
  try {
    products = await getProducts();
  } catch (err) {
    console.log("Failed to select products", err);
    return (
      <>
        <Header
          nav={[
            {
              href: "https://github.com/damdiana?tab=repositories",
              title: "Body",
            },
            {
              href: "https://github.com/damdiana?tab=repositories",
              title: "Face",
            },
            {
              href: "https://github.com/damdiana?tab=repositories",
              title: "New",
            },
            {
              href: "https://github.com/damdiana?tab=repositories",
              title: "Trending",
            },
          ]}
        />
        <p className="m-2 text-center"> Failed to list products </p>
      </>
    );
  }
  return (
    <div>
      <Header
        nav={[
          {
            href: "https://github.com/damdiana?tab=repositories",
            title: "Body",
          },
          {
            href: "https://github.com/damdiana?tab=repositories",
            title: "Face",
          },
          {
            href: "https://github.com/damdiana?tab=repositories",
            title: "New",
          },
          {
            href: "https://github.com/damdiana?tab=repositories",
            title: "Trending",
          },
        ]}
      />
      <div className="grid card-grid-cols-3 mt-4 gap-4">
        {products.length > 0 ? (
          <>
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </>
        ) : (
          <p> No Products Yet </p>
        )}
      </div>
    </div>
  );
}
