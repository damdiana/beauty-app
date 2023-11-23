import Button from "@/components/Button-Link/Button/Button";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileFormNavigationButtons = ({
  onPrevious,
  hasNext,
}: {
  onPrevious?: () => void;
  hasNext: boolean;
}) => {
  return (
    <div className="flex justify-around m-4">
      {onPrevious !== undefined && (
        <>
          <Button
            variant="full"
            color="black"
            size="medium"
            onClick={onPrevious}
            className="rounded-md"
          >
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              className="mr-1 h-5 w-5"
            />
            Previous
          </Button>
        </>
      )}
      <Button
        type="submit"
        variant="full"
        color="black"
        size="medium"
        className="rounded-md"
      >
        {hasNext ? (
          <>
            Next
            <FontAwesomeIcon icon={faAngleDoubleRight} className="h-5 w-5" />
          </>
        ) : (
          <p>Finish </p>
        )}
      </Button>
    </div>
  );
};

export { ProfileFormNavigationButtons };
