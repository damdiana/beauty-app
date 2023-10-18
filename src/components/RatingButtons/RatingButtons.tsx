import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";

const RatingButtons = ({
  rating,
  onRatingChange,
}: {
  rating: number;
  onRatingChange: (newRating: number) => void;
}) => {
  return (
    <div>
      {new Array(5).fill("").map((_, index) => (
        <button
          type="button"
          className="text-2xl"
          key={index}
          onClick={() => {
            onRatingChange(index + 1);
          }}
        >
          <FontAwesomeIcon
            icon={rating >= index + 1 ? faStar : faStarOutline}
            className="h-5 w-5"
          />
        </button>
      ))}
    </div>
  );
};

export default RatingButtons;
