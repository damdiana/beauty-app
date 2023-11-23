"use client";
import React from "react";
import { useEffect, useState } from "react";
import { ProfileFormNavigationButtons } from "./ProfileForm/ProfileFormNavigationButtons";

export type ProfileFormStep0Prop = {
  gender: ProfileGender | undefined;
  birthDate: number | undefined;
  goals: ProfileGoals[];
};
import ProfileFormLabelledInput from "./ProfileFormLabelledInput";
import { ProfileGender, ProfileGoals } from "@/services/types";
import { late } from "zod";

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
    setLocalData((prevValue) => {
      return { ...prevValue };
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

  const Genders = [
    {
      value: ProfileGender.FEMALE,
      label: "Female",
    },
    {
      value: ProfileGender.MALE,
      label: "Male",
    },
    {
      value: ProfileGender.OTHER,
      label: "Other",
    },
  ];

  const Goals = [
    {
      value: ProfileGoals.CREATE,
      label: "Create a skincare routine",
    },
    {
      value: ProfileGoals.IMPROVE,
      label: "Improve my skincare routine",
    },
    {
      value: ProfileGoals.DISCOVER,
      label: "Discover new products",
    },
  ];

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <fieldset className="my-3">
        <legend className="text-base mb-2 font-bold">
          Which gender do you identify as?
        </legend>
        <div className="flex flex-col">
          {Genders.map((gender) => {
            return (
              <ProfileFormLabelledInput
                key={gender.label}
                required
                type="radio"
                name="gender"
                label={gender.label}
                value={gender.value}
                checked={localData.gender === gender.value}
                onChange={() => {
                  setLocalData({
                    ...localData,
                    gender: gender.value,
                  });
                }}
              />
            );
          })}
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
        {Goals.map((goal) => {
          return (
            <ProfileFormLabelledInput
              key={goal.label}
              type="checkbox"
              name="interests"
              label={goal.label}
              value={goal.value}
              checked={localData.goals.includes(goal.value)}
              onChange={() => onGoalChange(goal.value)}
            />
          );
        })}
      </fieldset>
      <div>
        <ProfileFormNavigationButtons hasNext={true} />
      </div>
    </form>
  );
};

export default ProfileFormStep0;
