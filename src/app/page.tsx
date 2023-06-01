import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import fetchProducts from "@/services/ProductAPI";

export default async function Home() {
  let resp = await fetchProducts();

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
      <div className="grid card-grid-cols-3   mt-4 gap-4">
        {resp.ok === true ? (
          <>
            {resp.products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </>
        ) : (
          <p className="text-red-500"> {resp.message} </p>
        )}
      </div>
    </>
  );
}
