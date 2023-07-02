import { useEffect, useState } from "react";
import { ProfileFormNavigationButtons } from "./ProfileForm/ProfileFormNavigationButtons";

export type ProfileFormStep2Prop = {
  makeup: boolean;
  productsUsed: (
    | "foundation"
    | "concelear"
    | "powder"
    | "blush"
    | "bronzer"
    | "contour"
    | "eyeliner"
    | "mascara"
    | "eyeshadow"
    | "lipstick"
    | "lipliner"
    | "highlighter"
    | "primer"
    | "eyebrow"
    | "other"
  )[];
};

import ProfileFormLabelledInput from "./ProfileFormLabelledInput";

const ProfileFormStep2 = ({
  data,
  onPrevious,
  onNext,
}: {
  data: ProfileFormStep2Prop;
  onNext?: (data: ProfileFormStep2Prop) => void;
  onPrevious?: () => void;
}) => {
  const [localData, setLocalData] = useState<ProfileFormStep2Prop>(data);

  useEffect(() => {
    setLocalData({
      ...localData,
    });
  }, []);

  const onProductsUsedChange = (
    product: ProfileFormStep2Prop["productsUsed"][0]
  ) => {
    const isChecked = localData.productsUsed.includes(product);

    if (!isChecked) {
      setLocalData({
        ...localData,
        productsUsed: [...localData.productsUsed, product],
      });
    } else {
      setLocalData({
        ...localData,
        productsUsed: localData.productsUsed.filter((p) => p !== product),
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
        <fieldset className="mb-2 text-center item-center justify-center">
          <legend className="text-base mb-2 font-bold">
            Do you wear makeup?
          </legend>
          <div className="flex justify-around">
            <ProfileFormLabelledInput
              required
              label="Yes"
              value="yes"
              type="radio"
              name="do_you_wear_makeup"
              checked={localData.makeup === true}
              onChange={() => {
                setLocalData({
                  ...localData,
                  makeup: true,
                });
              }}
            />
            <ProfileFormLabelledInput
              required
              label="No"
              value="no"
              type="radio"
              name="do_you_wear_makeup"
              checked={localData.makeup === false}
              onChange={() => {
                setLocalData({
                  ...localData,
                  makeup: false,
                });
              }}
            />
          </div>
        </fieldset>
        <fieldset className="mb-2 flex flex-col">
          <legend className="mb-2 font-bold"> What products you use? </legend>
          <ProfileFormLabelledInput
            label="Foundation"
            value="foundation"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("foundation")}
            onChange={() => onProductsUsedChange("foundation")}
          />
          <ProfileFormLabelledInput
            label="Concelear"
            value="concelear"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("concelear")}
            onChange={() => onProductsUsedChange("concelear")}
          />
          <ProfileFormLabelledInput
            label="Blush"
            value="blush"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("blush")}
            onChange={() => onProductsUsedChange("blush")}
          />
          <ProfileFormLabelledInput
            label="Bronzer"
            value="bronzer"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("bronzer")}
            onChange={() => onProductsUsedChange("bronzer")}
          />
          <ProfileFormLabelledInput
            label="Contour"
            value="contour"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("bronzer")}
            onChange={() => onProductsUsedChange("bronzer")}
          />
          <ProfileFormLabelledInput
            label="Eyeliner"
            value="eyeliner"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("eyeliner")}
            onChange={() => onProductsUsedChange("eyeliner")}
          />
          <ProfileFormLabelledInput
            label="Mascara"
            value="mascara"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("mascara")}
            onChange={() => onProductsUsedChange("mascara")}
          />
          <ProfileFormLabelledInput
            label="Eyeshadow"
            value="eyeshadow"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("eyeshadow")}
            onChange={() => onProductsUsedChange("eyeshadow")}
          />
          <ProfileFormLabelledInput
            label="Lipstick"
            value="lipstick"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("lipstick")}
            onChange={() => onProductsUsedChange("lipstick")}
          />
          <ProfileFormLabelledInput
            label="Lipliner"
            value="lipliner"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("lipliner")}
            onChange={() => onProductsUsedChange("lipliner")}
          />
          <ProfileFormLabelledInput
            label="Powder"
            value="powder"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("powder")}
            onChange={() => onProductsUsedChange("powder")}
          />
          <ProfileFormLabelledInput
            label="Highlighter"
            value="highlighter"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("highlighter")}
            onChange={() => onProductsUsedChange("highlighter")}
          />
          <ProfileFormLabelledInput
            label="Primer"
            value="primer"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("primer")}
            onChange={() => onProductsUsedChange("primer")}
          />
          <ProfileFormLabelledInput
            label="Eyebrow products (pencil, gel, ect)"
            value="eyebrow"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("eyebrow")}
            onChange={() => onProductsUsedChange("eyebrow")}
          />
          <ProfileFormLabelledInput
            label="Other"
            value="other"
            type="checkbox"
            name="useproducts"
            checked={localData.productsUsed.includes("other")}
            onChange={() => onProductsUsedChange("other")}
          >
            <input type="text" className="border" />
          </ProfileFormLabelledInput>
        </fieldset>
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

export default ProfileFormStep2;
