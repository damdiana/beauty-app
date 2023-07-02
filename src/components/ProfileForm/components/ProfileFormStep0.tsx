"use client";
import React from "react";
import { useEffect, useState } from "react";
import { ProfileFormNavigationButtons } from "./ProfileForm/ProfileFormNavigationButtons";

export type ProfileFormStep0Prop = {
  gender: undefined | "female" | "male" | "other";
  birthDate: number | undefined;
  goals: ("create" | "discover" | "improve" | "other")[];
};
import ProfileFormLabelledInput from "./ProfileFormLabelledInput";

const ProfileFormStep0 = ({
  data,
  onNext,
}: {
  data: ProfileFormStep0Prop;
  onNext?: (data: ProfileFormStep0Prop) => void;
}) => {
  const [localData, setLocalData] = useState<ProfileFormStep0Prop>(data);
  // Temporary HACK to make checkboxes work with latest NextJS version
  // GitHub Issue here: https://github.com/vercel/next.js/issues/49499
  useEffect(() => {
    setLocalData({
      ...localData,
    });
  }, []);

  const onGoalChange = (singleGoal: ProfileFormStep0Prop["goals"][0]) => {
    const isChecked = localData.goals.includes(singleGoal);

    if (!isChecked) {
      setLocalData({
        ...localData,
        goals: [...localData.goals, singleGoal],
      });
    } else {
      setLocalData({
        ...localData,
        goals: localData.goals.filter((g) => g !== singleGoal),
      });
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (onNext !== undefined) {
      onNext(localData);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <fieldset className="my-3">
        <legend className="text-base mb-2 font-bold">
          Which gender do you identify as?
        </legend>
        <div className="flex flex-col">
          <ProfileFormLabelledInput
            required
            name="gender"
            value="female"
            label="Female"
            type="radio"
            checked={localData.gender === "female"}
            onChange={() => {
              setLocalData({
                ...localData,
                gender: "female",
              });
            }}
          />
          <ProfileFormLabelledInput
            required
            name="gender"
            value="male"
            label="Male"
            type="radio"
            checked={localData.gender === "male"}
            onChange={() => {
              setLocalData({
                ...localData,
                gender: "male",
              });
            }}
          />
          <ProfileFormLabelledInput
            required
            name="gender"
            value="other"
            label="Other"
            type="radio"
            checked={localData.gender === "other"}
            onChange={() => {
              setLocalData({
                ...localData,
                gender: "other",
              });
            }}
          />
        </div>
      </fieldset>
      <fieldset className="mb-3">
        <legend className="mb-2 font-bold">What is your date of birth?</legend>
        <label>
          <input
            required
            name="date_of_birth"
            type="date"
            value={
              localData.birthDate !== undefined
                ? new Date(localData.birthDate).toISOString().substring(0, 10)
                : undefined
            }
            onChange={(e) => {
              setLocalData({
                ...localData,
                birthDate: new Date(e.target.value).getTime(),
              });
            }}
          />
        </label>
      </fieldset>
      <fieldset className="mb-3 flex flex-col">
        <legend className="mb-2 font-bold">
          What is your goal? (select as many as needed)
        </legend>
        <ProfileFormLabelledInput
          label="Create a skincare routine"
          name="interests"
          value="routine"
          type="checkbox"
          checked={localData.goals.includes("create")}
          onChange={() => onGoalChange("create")}
        />
        <ProfileFormLabelledInput
          label="Improve my skincare routine"
          name="interests"
          value="improve"
          type="checkbox"
          checked={localData.goals.includes("improve")}
          onChange={() => onGoalChange("improve")}
        />
        <ProfileFormLabelledInput
          label="Discover new products"
          name="interests"
          value="new_products"
          type="checkbox"
          checked={localData.goals.includes("discover")}
          onChange={() => onGoalChange("discover")}
        />
        <ProfileFormLabelledInput
          label="Other"
          name="interests"
          value="other"
          type="checkbox"
          checked={localData.goals.includes("other")}
          onChange={() => onGoalChange("other")}
        >
          <input type="text" className="border" />
        </ProfileFormLabelledInput>
      </fieldset>
      <div>
        <ProfileFormNavigationButtons
          onNext={onNext !== undefined ? () => onNext(localData) : undefined}
        />
      </div>
    </form>
  );
};

export default ProfileFormStep0;
