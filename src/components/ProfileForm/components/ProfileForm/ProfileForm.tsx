"use client";
import { useState } from "react";
import ProfileFormStep0 from "../ProfileFormStep0";
import ProfileFormStep1 from "../ProfileFormStep1";
import ProfileFormStep2 from "../ProfileFormStep2";
import Button from "../../../Button-Link/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import ProfileFormStep3 from "../ProfileFormStep3";
import "./ProfileForm.css";

const ProfileForm = () => {
  const [step, setStep] = useState<number>(0);

  const advanceStep = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (step < STEP_COMPONENTS.length - 1) {
      setStep(step + 1);
    }
  };

  const decreaseStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const STEP_COMPONENTS = [
    <ProfileFormStep0 key="0" />,
    <ProfileFormStep1 key="1" />,
    <ProfileFormStep2 key="2" />,
    <ProfileFormStep3 key="3" />,
  ];

  return (
    <div>
      <form className="m-1 p-1 mb-4">
        <div>{STEP_COMPONENTS[step]} </div>
        <div className="absolute bottom-0 w-full">
          <div className="flex justify-around m-4">
            {step !== 0 && (
              <Button
                variant="full"
                color="black"
                size="medium"
                onClick={decreaseStep}
                className="rounded-md"
              >
                <FontAwesomeIcon icon={faAngleDoubleLeft} className="pr-1" />
                Previous
              </Button>
            )}

            {step !== STEP_COMPONENTS.length - 1 && (
              <Button
                variant="full"
                color="black"
                size="medium"
                onClick={advanceStep}
                className="rounded-md"
                type="submit"
              >
                Next <FontAwesomeIcon icon={faAngleDoubleRight} />
              </Button>
            )}
            <div className="flex justify-center m-2">
              <progress
                max={STEP_COMPONENTS.length - 1}
                value={step}
                className="border item-center profile-progress"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
