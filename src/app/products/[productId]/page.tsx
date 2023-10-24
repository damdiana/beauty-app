import Header from "@/components/Header/Header";
import "./product.css";
import { Metadata } from "next";
import { ProductScreen } from "@/components/ProductScreen";
import { getProductReviews } from "@/model/ProductReviewsModel";
import { ProductReviewsSection } from "@/components/ProductReviewsSection";
import { getProduct } from "@/model/ProductModel";
import { notFound } from "next/navigation";
import getUserServerSide from "@/services/server/UserService";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  let product = await getProduct(params.productId);

  if (product === undefined) {
    return {
      title: "Not found!",
    };
  }
  return {
    title: product.name,
  };
}

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  const user = await getUserServerSide();
  let product;
  try {
    product = await getProduct(params.productId);
  } catch (err) {
    return notFound();
  }
  let reviews = await getProductReviews(params.productId);
  return (
    <div>
      <Header
        user={user}
        nav={[
          {
            href: "#",
            title: "Body",
          },
          {
            href: "#",
            title: "Face",
          },
          {
            href: "#",
            title: "New",
          },
          {
            href: "#",
            title: "Trending",
          },
        ]}
      />
      {product !== undefined ? (
        <div>
          <ProductScreen product={product} />
          <ProductReviewsSection
            productId={params.productId}
            initialReviews={reviews}
          />
        </div>
      ) : (
        <p className="m-2 text-center">There are is no product for this ID</p>
      )}
    </div>
  );
}
