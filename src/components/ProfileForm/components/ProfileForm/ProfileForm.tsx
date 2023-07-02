"use client";
import { useState } from "react";
import ProfileFormStep0, { ProfileFormStep0Prop } from "../ProfileFormStep0";
import ProfileFormStep1, { ProfileFormStep1Prop } from "../ProfileFormStep1";
import ProfileFormStep2, { ProfileFormStep2Prop } from "../ProfileFormStep2";
import ProfileFormStep3, { ProfileFormStep3Prop } from "../ProfileFormStep3";
import "./ProfileForm.css";

const ProfileForm = () => {
  const [step, setStep] = useState<number>(0);
  const [profileFormState, setProfileFormState] = useState<{
    step0: ProfileFormStep0Prop;
    step1: ProfileFormStep1Prop;
    step2: ProfileFormStep2Prop;
    step3: ProfileFormStep3Prop;
  }>({
    step0: {
      gender: undefined,
      birthDate: Date.now(),
      goals: [],
    },
    step1: {
      skinTypes: [],
      skinConcerns: [],
      skinConditions: [],
      routineProducts: [],
    },
    step2: {
      makeup: false,
      productsUsed: [],
    },
    step3: {
      skincareBrands: [],
      makeupBrands: [],
    },
  });

  const advanceStep = (data: any) => {
    if (step < STEP_COMPONENTS.length - 1) {
      setProfileFormState({
        ...profileFormState,
        [`step${step}`]: data,
      });
      setStep(step + 1);
    }
  };

  const decreaseStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const STEP_COMPONENTS = [
    <ProfileFormStep0
      key="0"
      data={profileFormState.step0}
      onNext={advanceStep}
    />,
    <ProfileFormStep1
      key="1"
      data={profileFormState.step1}
      onNext={advanceStep}
      onPrevious={decreaseStep}
    />,
    <ProfileFormStep2
      key="2"
      data={profileFormState.step2}
      onNext={advanceStep}
      onPrevious={decreaseStep}
    />,
    <ProfileFormStep3
      key="3"
      data={profileFormState.step3}
      onPrevious={decreaseStep}
    />,
  ];

  return (
    <div className="m-1 p-1 mb-4">
      <div>{STEP_COMPONENTS[step]} </div>
      <div className="flex justify-center m-2">
        <progress
          max={STEP_COMPONENTS.length - 1}
          value={step}
          className="border item-center profile-progress"
        />
      </div>
    </div>
  );
};

export default ProfileForm;
