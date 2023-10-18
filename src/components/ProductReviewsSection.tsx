"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ViewRating } from "./ViewRating";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import { faFaceFrownOpen } from "@fortawesome/free-solid-svg-icons";
import {
  ProductReview,
  ProductReview as ProductReviewsSection,
} from "@/model/ProductReviewsModel";
import { useState } from "react";
import {
  ProductReviewPostPayload,
  postProductReview,
} from "@/services/ProductReviewsAPI";

const ProductReviewsSection = ({
  initialReviews,
  productId,
}: {
  productId: string;
  initialReviews: ProductReviewsSection[];
}) => {
  const [productReviews, setProductReviews] =
    useState<ProductReview[]>(initialReviews);

  async function onAddReview(review: ProductReviewPostPayload) {
    let resp = await postProductReview(review);
    if (resp.ok) {
      setProductReviews([...productReviews, resp.productReview]);
    }
  }

  return (
    <div>
      <h2 className="font-bold text-lg border-t border-solid border-grey m-2 p-2">
        Ratings & Reviews
      </h2>
      {productReviews.length === 0 && (
        <div className="flex items-center">
          <p className="font-bold mx-2"> No reviews for this product yet </p>
          <FontAwesomeIcon icon={faFaceFrownOpen} className="h-5 w-5" />
        </div>
      )}
      {productReviews.map((review) => (
        <ViewRating key={review.id} review={review} />
      ))}

      <FeedbackForm onAddReview={onAddReview} productId={productId} />
    </div>
  );
};

export { ProductReviewsSection };
