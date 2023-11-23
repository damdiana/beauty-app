import ProfileFormLabelledInput from "./ProfileFormLabelledInput";
import { Key, useEffect, useState } from "react";
import { ProfileFormNavigationButtons } from "./ProfileForm/ProfileFormNavigationButtons";
import { ProfileMakeupBrands, ProfileSkincareBrands } from "@/services/types";

export type ProfileFormStep3Prop = {
  skincareBrands: ProfileSkincareBrands[];
  makeupBrands: ProfileMakeupBrands[];
};

const ProfileForm3 = ({
  data,
  onPrevious,
  onFinish,
  wizard,
}: {
  data: ProfileFormStep3Prop;
  onPrevious?: () => void;
  onFinish?: (data: ProfileFormStep3Prop) => void;
  wizard: Record<Key, string>;
}) => {
  const [localData, setLocalData] = useState<ProfileFormStep3Prop>(data);

  useEffect(() => {
    setLocalData((prevValue) => {
      return { ...prevValue };
    });
  }, []);

  const onSkincareBrandsChange = (
    brand: ProfileFormStep3Prop["skincareBrands"][0]
  ) => {
    const isChecked = localData.skincareBrands.includes(brand);

    if (!isChecked) {
      setLocalData({
        ...localData,
        skincareBrands: [...localData.skincareBrands, brand],
      });
    } else {
      setLocalData({
        ...localData,
        skincareBrands: localData.skincareBrands.filter((b) => b !== brand),
      });
    }
  };

  const onMakeupBrandsChange = (
    brand: ProfileFormStep3Prop["makeupBrands"][0]
  ) => {
    const isChecked = localData.makeupBrands.includes(brand);

    if (!isChecked) {
      setLocalData({
        ...localData,
        makeupBrands: [...localData.makeupBrands, brand],
      });
    } else {
      setLocalData({
        ...localData,
        makeupBrands: localData.makeupBrands.filter((b) => b !== brand),
      });
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (onFinish !== undefined) {
      onFinish(localData);
    }
  };

  const SkincareBrands = [
    {
      label: "Paula's Choice",
      value: ProfileSkincareBrands.PAULA_S,
    },
    {
      label: "The Ordinary",
      value: ProfileSkincareBrands.THE_ORDINARY,
    },
    {
      label: "Inkey List",
      value: ProfileSkincareBrands.INKEY,
    },
    {
      label: "Estee Lauder",
      value: ProfileSkincareBrands.ESTEE,
    },
    {
      label: "Cerave",
      value: ProfileSkincareBrands.CERAVE,
    },
    {
      label: "REN",
      value: ProfileSkincareBrands.REN,
    },
    {
      label: "Caudalie",
      value: ProfileSkincareBrands.CAUDALIE,
    },
    {
      label: "Belief",
      value: ProfileSkincareBrands.BELIEF,
    },
    {
      label: "Dr. Jart",
      value: ProfileSkincareBrands.JART,
    },
    {
      label: "Fresh",
      value: ProfileSkincareBrands.FRESH,
    },
    {
      label: "Innisfree",
      value: ProfileSkincareBrands.INNISFREE,
    },
    {
      label: "Laneige",
      value: ProfileSkincareBrands.LANEIGE,
    },
    {
      label: "Pixie",
      value: ProfileSkincareBrands.PIXIE,
    },
    {
      label: "Sunday Rileys",
      value: ProfileSkincareBrands.SUNDAY_RILEYS,
    },
    {
      label: "Summer Friday",
      value: ProfileSkincareBrands.SUMMER_FRIDAY,
    },
  ];

  const MakeupBrands = [
    {
      label: "Dior",
      value: ProfileMakeupBrands.DIOR,
    },
    {
      label: "Chanel",
      value: ProfileMakeupBrands.CHANEL,
    },
    {
      label: "Fenty Beauty",
      value: ProfileMakeupBrands.FENTY,
    },
    {
      label: "Estee Lauder",
      value: ProfileMakeupBrands.ESTEE,
    },
    {
      label: "Rare Beauty",
      value: ProfileMakeupBrands.RARE,
    },
    {
      label: "Nars",
      value: ProfileMakeupBrands.NARS,
    },
    {
      label: "Laura Mercier",
      value: ProfileMakeupBrands.LAURA_MERCIER,
    },
    {
      label: "Benefit",
      value: ProfileMakeupBrands.BENEFIT,
    },
    {
      label: "Milk Makeup",
      value: ProfileMakeupBrands.MILK,
    },
    {
      label: "Tower 28",
      value: ProfileMakeupBrands.TOWER_28,
    },
    {
      label: "Makeup Forever",
      value: ProfileMakeupBrands.MAKEUP_FOREVER,
    },
    {
      label: "Charlotte Tilbury",
      value: ProfileMakeupBrands.CT,
    },
  ];

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <div className="flex justify-around">
        <fieldset className="mb-2 flex flex-col">
          <legend className="mb-2 font-bold"> Skincare brands you use </legend>
          {SkincareBrands.map((brand) => {
            return (
              <ProfileFormLabelledInput
                key={brand.label}
                label={brand.label}
                name="skincare_brands"
                value={brand.value}
                type="checkbox"
                checked={localData.skincareBrands.includes(brand.value)}
                onChange={() => onSkincareBrandsChange(brand.value)}
              />
            );
          })}
        </fieldset>
        <fieldset className="mb-2 flex flex-col">
          <legend className="mb-2 font-bold"> Makeup brands you use </legend>
          {MakeupBrands.map((brand) => {
            return (
              <ProfileFormLabelledInput
                key={brand.label}
                label={brand.label}
                name="makeup_brands"
                value={brand.value}
                type="checkbox"
                checked={localData.makeupBrands.includes(brand.value)}
                onChange={() => onMakeupBrandsChange(brand.value)}
              />
            );
          })}
        </fieldset>
      </div>
      <div>
        <ProfileFormNavigationButtons onPrevious={onPrevious} hasNext={false} />
        {wizard.type === "error" && (
          <p className="text-red-500 font-bold text-center">{wizard.message}</p>
        )}
      </div>
    </form>
  );
};

export default ProfileForm3;
