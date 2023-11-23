"use client";
import { useEffect, useState } from "react";
import { ProfileFormNavigationButtons } from "./ProfileForm/ProfileFormNavigationButtons";

export type ProfileFormStep1Prop = {
  skinTypes: ProfileSkinType[];
  skinConcerns: ProfileSkinConcern[];
  skinConditions: ProfileSkinConditions[];
  routineProducts: ProfileRoutineProducts[];
};
import ProfileFormLabelledInput from "./ProfileFormLabelledInput";
import {
  ProfileRoutineProducts,
  ProfileSkinConcern,
  ProfileSkinConditions,
  ProfileSkinType,
} from "@/services/types";

const ProfileFormStep1 = ({
  data,
  onNext,
  onPrevious,
}: {
  data: ProfileFormStep1Prop;
  onNext?: (data: ProfileFormStep1Prop) => void;
  onPrevious?: () => void;
}) => {
  const [localData, setLocalData] = useState<ProfileFormStep1Prop>(data);

  useEffect(() => {
    setLocalData((prevValue) => {
      return { ...prevValue };
    });
  }, []);

  const onTypeChange = (type: ProfileFormStep1Prop["skinTypes"][0]) => {
    const isChecked = localData.skinTypes.includes(type);

    if (!isChecked) {
      setLocalData({
        ...localData,
        skinTypes: [...localData.skinTypes, type],
      });
    } else {
      setLocalData({
        ...localData,
        skinTypes: localData.skinTypes.filter((t) => t !== type),
      });
    }
  };

  const onConcernsChange = (
    concern: ProfileFormStep1Prop["skinConcerns"][0]
  ) => {
    const isChecked = localData.skinConcerns.includes(concern);

    if (!isChecked) {
      setLocalData({
        ...localData,
        skinConcerns: [...localData.skinConcerns, concern],
      });
    } else {
      setLocalData({
        ...localData,
        skinConcerns: localData.skinConcerns.filter((c) => c !== concern),
      });
    }
  };

  const onConditionsChange = (
    condition: ProfileFormStep1Prop["skinConditions"][0]
  ) => {
    const isChecked = localData.skinConditions.includes(condition);

    if (!isChecked) {
      setLocalData({
        ...localData,
        skinConditions: [...localData.skinConditions, condition],
      });
    } else {
      setLocalData({
        ...localData,
        skinConditions: localData.skinConditions.filter((c) => c !== condition),
      });
    }
  };

  const onRoutineChange = (
    product: ProfileFormStep1Prop["routineProducts"][0]
  ) => {
    const isChecked = localData.routineProducts.includes(product);

    if (!isChecked) {
      setLocalData({
        ...localData,
        routineProducts: [...localData.routineProducts, product],
      });
    } else {
      setLocalData({
        ...localData,
        routineProducts: localData.routineProducts.filter((p) => p !== product),
      });
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (onNext !== undefined) {
      onNext(localData);
    }
  };

  const SkinTypes = [
    {
      label: "Dry",
      value: ProfileSkinType.DRY,
    },
    {
      label: "Oily",
      value: ProfileSkinType.OILY,
    },
    {
      label: "Combination",
      value: ProfileSkinType.COMBINATION,
    },
    {
      label: "Sensitive",
      value: ProfileSkinType.SENSITIVE,
    },
    {
      label: "Normal",
      value: ProfileSkinType.NORMAL,
    },
  ];

  const SkinConcerns = [
    {
      label: "Acnee and scaring",
      value: ProfileSkinConcern.ACNEE,
    },
    {
      label: "Dull and uneven skin tone",
      value: ProfileSkinConcern.DULLNESS,
    },
    {
      label: "Aging skin",
      value: ProfileSkinConcern.AGING,
    },
    {
      label: "Wrinkles and fine lines",
      value: ProfileSkinConcern.WRINKLES,
    },
    {
      label: "Sun damage",
      value: ProfileSkinConcern.SUN_DAMAGE,
    },
  ];

  const SkinConditions = [
    {
      label: "Rosacea",
      value: ProfileSkinConditions.ROSACEA,
    },
    {
      label: "Atopic dermatitis (Eczema)",
      value: ProfileSkinConditions.DERMATITIS,
    },
    {
      label: "Melasma",
      value: ProfileSkinConditions.MELASMA,
    },
    {
      label: "Milia",
      value: ProfileSkinConditions.MILIA,
    },
    {
      label: "Hyperpigmentation",
      value: ProfileSkinConditions.HYPERPIGMENTATION,
    },
  ];

  const RoutineProducts = [
    {
      label: "Clenser",
      value: ProfileRoutineProducts.CLENSER,
    },
    {
      label: "Moisturizer",
      value: ProfileRoutineProducts.MOISTURIZER,
    },
    {
      label: "Serum",
      value: ProfileRoutineProducts.SERUM,
    },
    {
      label: "Toner",
      value: ProfileRoutineProducts.TONER,
    },
    {
      label: "Eye Cream",
      value: ProfileRoutineProducts.EYE_CREAM,
    },
    {
      label: "Face Mask",
      value: ProfileRoutineProducts.FACE_MASK,
    },
    {
      label: "Micelar water",
      value: ProfileRoutineProducts.MICELAR_WATER,
    },
    {
      label: "Clenser balm",
      value: ProfileRoutineProducts.CLENSER_BALM,
    },
    {
      label: "I don't have a routine",
      value: ProfileRoutineProducts.NO_ROUTINE,
    },
  ];

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <div className="flex justify-around">
        <div>
          <fieldset className="mb-2 flex flex-col">
            <legend className="mb-2 font-bold">What is your skin type?</legend>
            {SkinTypes.map((type) => {
              return (
                <ProfileFormLabelledInput
                  key={type.label}
                  label={type.label}
                  name="skin_type"
                  value={type.value}
                  type="checkbox"
                  checked={localData.skinTypes.includes(type.value)}
                  onChange={() => onTypeChange(type.value)}
                />
              );
            })}
          </fieldset>
          <fieldset className="mb-2 flex flex-col">
            <legend className="mb-2 font-bold">
              What are your skin concerns?
            </legend>
            {SkinConcerns.map((concern) => {
              return (
                <ProfileFormLabelledInput
                  key={concern.label}
                  label={concern.label}
                  name="skin_concerns"
                  value={concern.value}
                  type="checkbox"
                  checked={localData.skinConcerns.includes(concern.value)}
                  onChange={() => onConcernsChange(concern.value)}
                />
              );
            })}
          </fieldset>
        </div>
        <div>
          <fieldset className="mb-2 flex flex-col">
            <legend className="mb-2 font-bold">
              What are your skin conditions?
            </legend>
            {SkinConditions.map((condition) => {
              return (
                <ProfileFormLabelledInput
                  key={condition.label}
                  label={condition.label}
                  name="skin_conditions"
                  value={condition.value}
                  type="checkbox"
                  checked={localData.skinConditions.includes(condition.value)}
                  onChange={() => onConditionsChange(condition.value)}
                />
              );
            })}
          </fieldset>
          <fieldset className="mb-2 flex flex-col">
            <legend className="mb-2 font-bold">
              What product do you use in your routine?
            </legend>
            {RoutineProducts.map((product) => {
              return (
                <ProfileFormLabelledInput
                  key={product.label}
                  label={product.label}
                  name="routine_products"
                  value={product.value}
                  type="checkbox"
                  checked={localData.routineProducts.includes(product.value)}
                  onChange={() => onRoutineChange(product.value)}
                />
              );
            })}
          </fieldset>
        </div>
      </div>
      <div>
        <ProfileFormNavigationButtons onPrevious={onPrevious} hasNext={true} />
      </div>
    </form>
  );
};

export default ProfileFormStep1;
