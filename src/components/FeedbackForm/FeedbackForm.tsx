"use client";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../Button-Link/Button/Button";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="w-full text-center">
      <h2 className="font-bold text-lg border-b border-solid border-black pb-1">
        Customer Review
      </h2>
      <div className="m-2 p-2">
        <p className="my-2 font-bold text-lg"> Rating </p>
        {new Array(5).fill("").map((_, index) => (
          <button
            className="text-2xl"
            key={index}
            onClick={() => {
              setRating(index + 1);
            }}
          >
            <FontAwesomeIcon
              icon={rating >= index + 1 ? faStar : faStarOutline}
            />
          </button>
        ))}
      </div>
      <div className="flex flex-col m-2 p-2 items-center">
        <label htmlFor="nickname" className="my-2 font-bold">
          Nickname
        </label>
        <input
          name="nickname"
          type="text"
          required
          maxLength={100}
          className="p-2 w-3/6 border-solid border-black border text-center"
        />
      </div>
      <div className="flex flex-col mb-2 m-2 p-2 items-center">
        <label htmlFor="review" className="my-2 font-bold">
          Your review
        </label>
        <textarea
          name="review"
          required
          className="p-2 w-3/6 border-solid border-black border"
          placeholder="I used this product for a month and my skin is more glowy"
          rows={10}
          cols={80}
        />
      </div>
      <Button variant="full" color="black" size="medium" className="m-4 p-2">
        SUBMIT
      </Button>
    </div>
  );
};

export default FeedbackForm;
