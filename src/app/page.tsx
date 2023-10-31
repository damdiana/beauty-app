import { HEADER_NAV } from "@/Constants";
import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import { getProducts } from "@/model/ProductModel";
import getUserServerSide from "@/services/server/UserService";
export default async function Home() {
  let products;
  const user = await getUserServerSide();
  try {
    products = await getProducts();
  } catch (err) {
    console.log("Failed to select products", err);
    return (
      <>
        <Header nav={HEADER_NAV} user={user} />
        <p className="m-2 text-center"> Failed to list products </p>
      </>
    );
  }
  return (
    <div>
      <Header nav={HEADER_NAV} user={user} />
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
