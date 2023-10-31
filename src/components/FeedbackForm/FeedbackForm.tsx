"use client";
import { useState } from "react";
import Button from "../Button-Link/Button/Button";
import { ProductReview } from "@/model/ProductReviewsModel";
import { formatDateTime } from "@/services/utils";
import { ProductReviewPostPayload } from "@/services/ProductReviewsAPI";
import RatingButtons from "../RatingButtons/RatingButtons";

const FeedbackForm = ({
  productId,
  onAddReview,
}: {
  productId: string;
  onAddReview: (review: ProductReviewPostPayload) => Promise<
    | {
        ok: true;
        productReview: ProductReview;
      }
    | {
        ok: false;
        message: string;
      }
  >;
}) => {
  const [rating, setRating] = useState(0);
  const [wizard, setWizard] = useState<
    | {
        type: "initial";
      }
    | {
        type: "loading";
      }
    | {
        type: "error";
        message: string;
      }
  >({ type: "initial" });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (rating === 0) {
      return setWizard({ type: "error", message: "Rating Mandatory!" });
    }

    setWizard({ type: "loading" });

    try {
      const review: ProductReviewPostPayload = {
        review: event.currentTarget.review.value as string,
        title: event.currentTarget.reviewTitle.value as string,
        recommending: event.currentTarget.recommending.checked as boolean,
        product_id: productId,
        added_at: formatDateTime(new Date()),
        rating: rating,
      };
      let resp = await onAddReview(review);
      if (resp.ok === false) {
        setWizard({ type: "error", message: resp.message });
      } else {
        setWizard({ type: "initial" });
      }
    } catch (err) {
      setWizard({ type: "error", message: "Failed to add review" });
    }
  };
  return (
    <div className="w-full text-center">
      <h2 className="font-bold text-lg border-b border-solid border-black pb-1">
        Customer Review
      </h2>
      <form onSubmit={onSubmit}>
        <div className="m-2 p-2">
          <p className="my-2 font-bold text-lg"> Rating </p>
          <RatingButtons
            rating={rating}
            onRatingChange={(newRating) => setRating(newRating)}
          />
        </div>
        <div className="flex flex-col m-2 p-2 items-center">
          <label htmlFor="title" className="my-2 font-bold">
            Rating title
          </label>
          <input
            name="reviewTitle"
            type="text"
            required
            maxLength={80}
            className="p-2 w-2/6 border-solid border-black border text-center"
          />
        </div>
        <div className=" item-center">
          <label className="font-bold mb-1">
            Do you recomand this product?
            <input type="checkbox" name="recommending" className="m-2" />
          </label>
        </div>
        <div className="flex flex-col mb-2 m-2 p-2 items-center">
          <label htmlFor="review" className="my-2 font-bold">
            Your review
          </label>
          <textarea
            name="review"
            required
            className="p-2 w-2/6 border-solid border-black border"
            placeholder="I used this product for a month and my skin is more glowy"
            rows={10}
            cols={80}
          />
        </div>
        {wizard.type === "error" && (
          <p className="text-red-500 font-bold">{wizard.message}</p>
        )}
        <Button
          variant="full"
          color="black"
          size="medium"
          className="m-4 p-2 rounded-xl font-bold reviewProduct-hoover"
          type="submit"
        >
          {wizard.type === "loading" ? "LOADING" : "SUBMIT"}
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
