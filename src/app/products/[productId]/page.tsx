import Header from "@/components/Header/Header";
import { fetchProduct } from "@/services/ProductAPI";
import "./product.css";
import { Metadata } from "next";
import { ProductScreen } from "@/components/ProductScreen";
import FeedbackForm from "@/components/FeedbackForm/FeedbackForm";
import { ViewRating } from "@/components/ViewRating";
import {
  postProductReview,
  fetchProductReviews,
} from "@/services/ProductReviewsAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";
import { ProductReview } from "@/model/ProductReviewsModel";
import { ProductReviewsSection } from "@/components/ProductReviewsSection";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  let resp = await fetchProduct(params.productId);

  if (resp.ok) {
    return {
      title: resp.product.name,
    };
  }

  return {
    title: "Not Found!",
  };
}

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  let productResp = await fetchProduct(params.productId);
  let reviewsResp = await fetchProductReviews(params.productId);

  return (
    <div>
      <Header
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
      {productResp.ok === true ? (
        <ProductScreen product={productResp.product} />
      ) : (
        <p> {productResp.message} </p>
      )}
      {reviewsResp.ok === true ? (
        <ProductReviewsSection
          productId={params.productId}
          initialReviews={reviewsResp.productReviews}
        />
      ) : (
        <div className="flex items-center">
          <p className="font-bold mx-2"> Unable to show the reviews </p>
          <FontAwesomeIcon icon={faFaceFrownOpen} className="h-5 w-5" />
        </div>
      )}
    </div>
  );
}
