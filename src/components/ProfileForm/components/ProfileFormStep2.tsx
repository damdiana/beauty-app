import { useEffect, useState } from "react";
import { ProfileFormNavigationButtons } from "./ProfileForm/ProfileFormNavigationButtons";

export type ProfileFormStep2Prop = {
  makeup: boolean | undefined;
  productsUsed: ProfileProductsUsed[];
};

import ProfileFormLabelledInput from "./ProfileFormLabelledInput";
import { ProfileProductsUsed } from "@/services/types";

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
    setLocalData((prevValue) => {
      return { ...prevValue };
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

  const MakeupProductsUsed = [
    {
      label: "Foundation",
      value: ProfileProductsUsed.FOUNDATION,
    },
    {
      label: "Concelear",
      value: ProfileProductsUsed.CONCELEAR,
    },
    {
      label: "Blush",
      value: ProfileProductsUsed.BLUSH,
    },
    {
      label: "Bronzer",
      value: ProfileProductsUsed.BRONZER,
    },
    {
      label: "Contour",
      value: ProfileProductsUsed.CONTOUR,
    },
    {
      label: "Eyeliner",
      value: ProfileProductsUsed.EYELINER,
    },
    {
      label: "Mascara",
      value: ProfileProductsUsed.MASCARA,
    },
    {
      label: "Eyeshadow",
      value: ProfileProductsUsed.EYESHADOW,
    },
    {
      label: "Lipstick",
      value: ProfileProductsUsed.LIPSTICK,
    },
    {
      label: "Lipliner",
      value: ProfileProductsUsed.LIPLINER,
    },
    {
      label: "Powder",
      value: ProfileProductsUsed.POWDER,
    },
    {
      label: "Highlighter",
      value: ProfileProductsUsed.HIGHLIGHTER,
    },
    {
      label: "Primer",
      value: ProfileProductsUsed.PRIMER,
    },

    {
      label: "Eyebrow products (pencil, gel, ect)",
      value: ProfileProductsUsed.EYEBROW,
    },
  ];

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
          {MakeupProductsUsed.map((product) => {
            return (
              <ProfileFormLabelledInput
                key={product.label}
                label={product.label}
                name="useproducts"
                value={product.value}
                type="checkbox"
                checked={localData.productsUsed.includes(product.value)}
                onChange={() => onProductsUsedChange(product.value)}
              />
            );
          })}
        </fieldset>
      </div>
      <div>
        <ProfileFormNavigationButtons onPrevious={onPrevious} hasNext={true} />
      </div>
    </form>
  );
};

export default ProfileFormStep2;
