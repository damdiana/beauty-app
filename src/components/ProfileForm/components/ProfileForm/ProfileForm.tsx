"use client";
import { useState } from "react";
import ProfileFormStep0, { ProfileFormStep0Prop } from "../ProfileFormStep0";
import ProfileFormStep1, { ProfileFormStep1Prop } from "../ProfileFormStep1";
import ProfileFormStep2, { ProfileFormStep2Prop } from "../ProfileFormStep2";
import ProfileFormStep3, { ProfileFormStep3Prop } from "../ProfileFormStep3";
import postUserDetails from "@/services/User";
import { ProfileGender, UserProfile } from "@/services/types";
import { useRouter } from "next/navigation";
import "./ProfileForm.css";

const ProfileForm = ({ user }: { user: UserProfile }) => {
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

  const [step, setStep] = useState<number>(0);
  const [profileFormState, setProfileFormState] = useState<{
    step0: ProfileFormStep0Prop;
    step1: ProfileFormStep1Prop;
    step2: ProfileFormStep2Prop;
    step3: ProfileFormStep3Prop;
  }>({
    step0: {
      gender: user.gender,
      goals: user.goals,
      birthDate: user.birthdate?.getTime(),
    },
    step1: {
      skinTypes: user.skin_types,
      skinConcerns: user.skin_concerns,
      skinConditions: user.skin_conditions,
      routineProducts: user.routine_products,
    },
    step2: {
      makeup: user.using_makeup,
      productsUsed: user.products_used,
    },
    step3: {
      skincareBrands: user.skincare_brands,
      makeupBrands: user.makeup_brands,
    },
  });
  const router = useRouter();

  function transformToUserProfile(profileFormState: {
    step0: ProfileFormStep0Prop;
    step1: ProfileFormStep1Prop;
    step2: ProfileFormStep2Prop;
    step3: ProfileFormStep3Prop;
  }): UserProfile {
    let gender: ProfileGender = ProfileGender.OTHER;

    if (profileFormState.step0.gender !== undefined) {
      gender = profileFormState.step0.gender;
    }

    const birthDate: Date | undefined = profileFormState.step0.birthDate
      ? new Date(profileFormState.step0.birthDate)
      : undefined;

    return {
      gender,
      birthdate: birthDate,
      goals: profileFormState.step0.goals,
      skin_types: profileFormState.step1.skinTypes,
      skin_concerns: profileFormState.step1.skinConcerns,
      skin_conditions: profileFormState.step1.skinConditions,
      routine_products: profileFormState.step1.routineProducts,
      using_makeup: profileFormState.step2.makeup,
      products_used: profileFormState.step2.productsUsed,
      skincare_brands: profileFormState.step3.skincareBrands,
      makeup_brands: profileFormState.step3.makeupBrands,
    };
  }

  const advanceStep = (
    data:
      | ProfileFormStep0Prop
      | ProfileFormStep1Prop
      | ProfileFormStep2Prop
      | ProfileFormStep3Prop
  ) => {
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

  const submitForm = async (data: ProfileFormStep3Prop) => {
    setWizard({ type: "loading" });
    const newProfileFormState = {
      ...profileFormState,
      step3: data,
    };
    setProfileFormState(newProfileFormState);
    const profileFormZod = transformToUserProfile(newProfileFormState);

    try {
      const response = await postUserDetails(profileFormZod);
      if (response.ok) {
        router.replace("/profile");
        // Refresh the router to clear user details from the My profile page.
        // Without this, the old details of the user remain displayed,
        // and we have to refresh the page.
        router.refresh();
      } else {
        setWizard({ type: "error", message: response.message });
      }
    } catch (error) {
      setWizard({ type: "error", message: "Error submitting user details:" });
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
      onFinish={submitForm}
      wizard={wizard}
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
