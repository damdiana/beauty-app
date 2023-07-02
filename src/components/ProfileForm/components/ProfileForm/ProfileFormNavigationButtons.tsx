import Button from "@/components/Button-Link/Button/Button";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileFormNavigationButtons = ({
  onPrevious,
  onNext,
}: {
  onPrevious?: () => void;
  onNext?: () => void;
}) => {
  return (
    <div className="flex justify-around m-4">
      {onPrevious !== undefined && (
        <Button
          variant="full"
          color="black"
          size="medium"
          onClick={onPrevious}
          className="rounded-md"
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} className="pr-1" />
          Previous
        </Button>
      )}
      {onNext !== undefined && (
        <Button
          type="submit"
          variant="full"
          color="black"
          size="medium"
          className="rounded-md"
        >
          Next <FontAwesomeIcon icon={faAngleDoubleRight} />
        </Button>
      )}
    </div>
  );
};

export { ProfileFormNavigationButtons };
