import Header from "@/components/Header/Header";
import { fetchProduct } from "@/services/ProductAPI";
import "./product.css";
import { Metadata } from "next";
import { ProductScreen } from "@/components/ProductScreen";
import FeedbackForm from "@/components/FeedbackForm/FeedbackForm";
import { ViewRating } from "@/components/ViewRating";
import { fetchProductReviews } from "@/services/ProductReviewsAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";

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
      <h2 className="font-bold text-lg border-t border-solid border-grey m-2 p-2">
        Ratings & Reviews
      </h2>
      {reviewsResp.ok === true && reviewsResp.productReviews.length === 0 && (
        <div className="flex items-center">
          <p className="font-bold mx-2"> No reviews for this product yet </p>
          <FontAwesomeIcon icon={faFaceFrownOpen} />
        </div>
      )}
      {reviewsResp.ok === true &&
        reviewsResp.productReviews.map((review) => (
          <ViewRating key={review.id} review={review} />
        ))}
      {reviewsResp.ok === false && (
        <div className="flex items-center">
          <p className="font-bold mx-2"> Unable to show the reviews </p>
          <FontAwesomeIcon icon={faFaceFrownOpen} />
        </div>
      )}

      <FeedbackForm />
    </div>
  );
}
