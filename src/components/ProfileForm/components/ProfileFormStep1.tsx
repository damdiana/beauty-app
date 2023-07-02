"use client";
import { useEffect, useState } from "react";
import { ProfileFormNavigationButtons } from "./ProfileForm/ProfileFormNavigationButtons";

export type ProfileFormStep1Prop = {
  skinTypes: ("dry" | "oily" | "combination" | "sensitive" | "normal")[];
  skinConcerns: ("acnee" | "dull" | "aging" | "wrinkles" | "sun_damage")[];
  skinConditions: (
    | "rosacea"
    | "eczema"
    | "melasma"
    | "milia"
    | "hyperpigmentation"
  )[];
  routineProducts: (
    | "clenser"
    | "moisturizer"
    | "serum"
    | "toner"
    | "eyecream"
    | "facemask"
    | "micelarwater"
    | "clenserbalm"
    | "noroutine"
  )[];
};
import ProfileFormLabelledInput from "./ProfileFormLabelledInput";

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
    setLocalData({
      ...localData,
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

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <div className="flex justify-around">
        <div>
          <fieldset className="mb-2 flex flex-col">
            <legend className="mb-2 font-bold">What is your skin type?</legend>
            <ProfileFormLabelledInput
              label="Dry"
              name="skin_type"
              value="dry"
              type="checkbox"
              checked={localData.skinTypes.includes("dry")}
              onChange={() => onTypeChange("dry")}
            />
            <ProfileFormLabelledInput
              label="Oily"
              name="skin_type"
              value="oily"
              type="checkbox"
              checked={localData.skinTypes.includes("oily")}
              onChange={() => onTypeChange("oily")}
            />
            <ProfileFormLabelledInput
              label="Combination"
              name="skin_type"
              value="combination"
              type="checkbox"
              checked={localData.skinTypes.includes("combination")}
              onChange={() => onTypeChange("combination")}
            />
            <ProfileFormLabelledInput
              label="Sensitive"
              name="skin_type"
              value="sensitive"
              type="checkbox"
              checked={localData.skinTypes.includes("sensitive")}
              onChange={() => onTypeChange("sensitive")}
            />
            <ProfileFormLabelledInput
              label="Normal"
              name="skin_type"
              value="normal"
              type="checkbox"
              checked={localData.skinTypes.includes("normal")}
              onChange={() => onTypeChange("normal")}
            />
          </fieldset>
          <fieldset className="mb-2 flex flex-col">
            <legend className="mb-2 font-bold">
              What are your skin concerns?
            </legend>
            <ProfileFormLabelledInput
              label="Acnee and scaring"
              name="skin_concerns"
              value="acnee"
              type="checkbox"
              checked={localData.skinConcerns.includes("acnee")}
              onChange={() => onConcernsChange("acnee")}
            />
            <ProfileFormLabelledInput
              label="Dull and uneven skin tone"
              name="skin_concerns"
              value="dull"
              type="checkbox"
              checked={localData.skinConcerns.includes("dull")}
              onChange={() => onConcernsChange("dull")}
            />
            <ProfileFormLabelledInput
              label="Aging skin"
              name="skin_concerns"
              value="aging"
              type="checkbox"
              checked={localData.skinConcerns.includes("aging")}
              onChange={() => onConcernsChange("aging")}
            />
            <ProfileFormLabelledInput
              label="Wrinkles and fine lines"
              name="skin_concerns"
              value="wrinkles"
              type="checkbox"
              checked={localData.skinConcerns.includes("wrinkles")}
              onChange={() => onConcernsChange("wrinkles")}
            />
            <ProfileFormLabelledInput
              label="Sun damage"
              name="skin_concerns"
              value="sun_damage"
              type="checkbox"
              checked={localData.skinConcerns.includes("sun_damage")}
              onChange={() => onConcernsChange("sun_damage")}
            />
          </fieldset>
        </div>
        <div>
          <fieldset className="mb-2 flex flex-col">
            <legend className="mb-2 font-bold">
              What are your skin conditions?
            </legend>
            <ProfileFormLabelledInput
              label="Rosacea"
              name="skin_concerns"
              value="rosacea"
              type="checkbox"
              checked={localData.skinConditions.includes("rosacea")}
              onChange={() => onConditionsChange("rosacea")}
            />
            <ProfileFormLabelledInput
              label="Atopic dermatitis (Eczema)"
              name="skin_concerns"
              value="eczema"
              type="checkbox"
              checked={localData.skinConditions.includes("eczema")}
              onChange={() => onConditionsChange("eczema")}
            />
            <ProfileFormLabelledInput
              label="Melasma"
              name="skin_concerns"
              value="melasma"
              type="checkbox"
              checked={localData.skinConditions.includes("melasma")}
              onChange={() => onConditionsChange("melasma")}
            />
            <ProfileFormLabelledInput
              label="Milia"
              name="skin_concerns"
              value="milia"
              type="checkbox"
              checked={localData.skinConditions.includes("milia")}
              onChange={() => onConditionsChange("milia")}
            />
            <ProfileFormLabelledInput
              label="Hyperpigmentation"
              name="skin_concerns"
              value="hyperpigmentation"
              type="checkbox"
              checked={localData.skinConditions.includes("hyperpigmentation")}
              onChange={() => onConditionsChange("hyperpigmentation")}
            />
          </fieldset>
          <fieldset className="mb-2 flex flex-col">
            <legend className="mb-2 font-bold">
              What product do you use in your routine?
            </legend>
            <ProfileFormLabelledInput
              label="Clenser"
              name="skin_concerns"
              value="clenser"
              type="checkbox"
              checked={localData.routineProducts.includes("clenser")}
              onChange={() => onRoutineChange("clenser")}
            />
            <ProfileFormLabelledInput
              label="Moisturizer"
              name="skin_concerns"
              value="moisturizer"
              type="checkbox"
              checked={localData.routineProducts.includes("moisturizer")}
              onChange={() => onRoutineChange("clenser")}
            />
            <ProfileFormLabelledInput
              label="Serum"
              name="skin_concerns"
              value="serum"
              type="checkbox"
              checked={localData.routineProducts.includes("serum")}
              onChange={() => onRoutineChange("serum")}
            />
            <ProfileFormLabelledInput
              label="Toner"
              name="skin_concerns"
              value="toner"
              type="checkbox"
              checked={localData.routineProducts.includes("toner")}
              onChange={() => onRoutineChange("toner")}
            />
            <ProfileFormLabelledInput
              label="Eye Cream"
              name="skin_concerns"
              value="eyecream"
              type="checkbox"
              checked={localData.routineProducts.includes("eyecream")}
              onChange={() => onRoutineChange("eyecream")}
            />
            <ProfileFormLabelledInput
              label="Face Mask"
              name="skin_concerns"
              value="facemask"
              type="checkbox"
              checked={localData.routineProducts.includes("facemask")}
              onChange={() => onRoutineChange("facemask")}
            />
            <ProfileFormLabelledInput
              label="Micelar water"
              name="skin_concerns"
              value="micelarwater"
              type="checkbox"
              checked={localData.routineProducts.includes("micelarwater")}
              onChange={() => onRoutineChange("micelarwater")}
            />
            <ProfileFormLabelledInput
              label="Clenser balm"
              name="skin_concerns"
              value="clenserbalm"
              type="checkbox"
              checked={localData.routineProducts.includes("clenserbalm")}
              onChange={() => onRoutineChange("clenserbalm")}
            />
            <ProfileFormLabelledInput
              label="I don't have a routine"
              name="skin_concerns"
              value="noroutine"
              type="checkbox"
              checked={localData.routineProducts.includes("noroutine")}
              onChange={() => onRoutineChange("noroutine")}
            />
          </fieldset>
        </div>
      </div>
      <div>
        <ProfileFormNavigationButtons
          onPrevious={onPrevious}
          onNext={onNext !== undefined ? () => onNext(localData) : undefined}
        />
      </div>
    </form>
  );
};

export default ProfileFormStep1;
