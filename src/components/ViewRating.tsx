"use client";
import { formatDateTime } from "@/services/utils";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ProductReview } from "@/model/ProductReviewsModel";

const ViewRating = ({ review }: { review: ProductReview }) => {
  return (
    <div className="flex justify-between px-4 mt-2 pb-2 border-b border-solid border-grey w-full">
      <div className="w-4/12">
        <p className="font-bold"> {review.user_id} </p>
        <p>
          <span className="font-bold"> Rating </span> {review.rating}
        </p>
      </div>
      <div className="w-full">
        <time dateTime={new Date(review.added_at).toISOString()}>
          {formatDateTime(new Date(review.added_at))}
        </time>
        <p className="font-bold"> {review.product_name} </p>
        <p className="mb-2"> {review.review}</p>
        <div className="flex">
          <p className="font-bold mr-1"> Recomanding this product? </p>
          {review.recommending === true ? (
            <p className="ml-2">
              Yes <FontAwesomeIcon icon={faCheck} />
            </p>
          ) : (
            <p className="ml-2">
              No <FontAwesomeIcon icon={faXmark} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export { ViewRating };
