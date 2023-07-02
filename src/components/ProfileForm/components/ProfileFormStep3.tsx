import ProfileFormLabelledInput from "./ProfileFormLabelledInput";
import { useEffect, useState } from "react";
import { ProfileFormNavigationButtons } from "./ProfileForm/ProfileFormNavigationButtons";

export type ProfileFormStep3Prop = {
  skincareBrands: (
    | "the_ordinary"
    | "paula_s_choice"
    | "inkey_list"
    | "estee_lauder"
    | "cerave"
    | "ren"
    | "caudalie"
    | "belief"
    | "jart"
    | "fresh"
    | "innisfree"
    | "laneige"
    | "pixie"
    | "sunday_riley"
    | "summer_fridays"
    | "other"
  )[];
  makeupBrands: (
    | "dior"
    | "chanel"
    | "fenty_beauty"
    | "estee_lauder"
    | "rare_beauty"
    | "nars"
    | "laura_mercier"
    | "benefit"
    | "milk_makeup"
    | "tower_28"
    | "makeup_forever"
    | "charlotte_tilbury"
    | "other"
  )[];
};

const ProfileForm3 = ({
  data,
  onPrevious,
  onNext,
}: {
  data: ProfileFormStep3Prop;
  onPrevious?: () => void;
  onNext?: (data: ProfileFormStep3Prop) => void;
}) => {
  const [localData, setLocalData] = useState<ProfileFormStep3Prop>(data);

  useEffect(() => {
    setLocalData({
      ...localData,
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
    if (onNext !== undefined) {
      onNext(localData);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <div className="flex justify-around">
        <fieldset className="mb-2 flex flex-col">
          <legend className="mb-2 font-bold"> Skincare brands you use </legend>
          <ProfileFormLabelledInput
            label="Paula's Choice"
            name="skincare_brands"
            value="paula_s_choice"
            type="checkbox"
            checked={localData.skincareBrands.includes("paula_s_choice")}
            onChange={() => onSkincareBrandsChange("paula_s_choice")}
          />
          <ProfileFormLabelledInput
            label="The Ordinary"
            name="skincare_brands"
            value="the_ordinary"
            type="checkbox"
            checked={localData.skincareBrands.includes("the_ordinary")}
            onChange={() => onSkincareBrandsChange("the_ordinary")}
          />
          <ProfileFormLabelledInput
            label="Inkey List"
            name="skincare_brands"
            value="inkey_list"
            type="checkbox"
            checked={localData.skincareBrands.includes("inkey_list")}
            onChange={() => onSkincareBrandsChange("inkey_list")}
          />
          <ProfileFormLabelledInput
            label="Estee Lauder"
            name="skincare_brands"
            value="estee_lauder"
            type="checkbox"
            checked={localData.skincareBrands.includes("estee_lauder")}
            onChange={() => onSkincareBrandsChange("estee_lauder")}
          />
          <ProfileFormLabelledInput
            label="Cerave"
            name="skincare_brands"
            value="cerave"
            type="checkbox"
            checked={localData.skincareBrands.includes("cerave")}
            onChange={() => onSkincareBrandsChange("cerave")}
          />
          <ProfileFormLabelledInput
            label="REN"
            name="skincare_brands"
            value="ren"
            type="checkbox"
            checked={localData.skincareBrands.includes("ren")}
            onChange={() => onSkincareBrandsChange("ren")}
          />
          <ProfileFormLabelledInput
            label="Caudalie"
            name="skincare_brands"
            value="caudalie"
            type="checkbox"
            checked={localData.skincareBrands.includes("caudalie")}
            onChange={() => onSkincareBrandsChange("caudalie")}
          />
          <ProfileFormLabelledInput
            label="Belief"
            name="skincare_brands"
            value="belief"
            type="checkbox"
            checked={localData.skincareBrands.includes("belief")}
            onChange={() => onSkincareBrandsChange("belief")}
          />
          <ProfileFormLabelledInput
            label="Dr. Jart"
            name="skincare_brands"
            value="jart"
            type="checkbox"
            checked={localData.skincareBrands.includes("jart")}
            onChange={() => onSkincareBrandsChange("jart")}
          />
          <ProfileFormLabelledInput
            label="Fresh"
            name="skincare_brands"
            value="fresh"
            type="checkbox"
            checked={localData.skincareBrands.includes("fresh")}
            onChange={() => onSkincareBrandsChange("fresh")}
          />
          <ProfileFormLabelledInput
            label="Innisfree"
            name="skincare_brands"
            value="innisfree"
            type="checkbox"
            checked={localData.skincareBrands.includes("innisfree")}
            onChange={() => onSkincareBrandsChange("innisfree")}
          />
          <ProfileFormLabelledInput
            label="Laneige"
            name="skincare_brands"
            value="laneige"
            type="checkbox"
            checked={localData.skincareBrands.includes("laneige")}
            onChange={() => onSkincareBrandsChange("laneige")}
          />
          <ProfileFormLabelledInput
            label="Pixie"
            name="skincare_brands"
            value="pixie"
            type="checkbox"
            checked={localData.skincareBrands.includes("pixie")}
            onChange={() => onSkincareBrandsChange("pixie")}
          />
          <ProfileFormLabelledInput
            label="Sunday Rileys"
            name="skincare_brands"
            value="sunday_riley"
            type="checkbox"
            checked={localData.skincareBrands.includes("sunday_riley")}
            onChange={() => onSkincareBrandsChange("sunday_riley")}
          />
          <ProfileFormLabelledInput
            label="Summer Friday"
            name="skincare_brands"
            value="summer_fridays"
            type="checkbox"
            checked={localData.skincareBrands.includes("summer_fridays")}
            onChange={() => onSkincareBrandsChange("summer_fridays")}
          />

          <ProfileFormLabelledInput
            label="Other"
            name="skincare_brands"
            value="other"
            type="checkbox"
            checked={localData.skincareBrands.includes("other")}
            onChange={() => onSkincareBrandsChange("other")}
          >
            <input type="text" className="border" />
          </ProfileFormLabelledInput>
        </fieldset>
        <fieldset className="mb-2 flex flex-col">
          <legend className="mb-2 font-bold"> Makeup brands you use </legend>

          <ProfileFormLabelledInput
            label="Dior"
            name="makeup_brands"
            value="dior"
            type="checkbox"
            checked={localData.makeupBrands.includes("dior")}
            onChange={() => onMakeupBrandsChange("dior")}
          />
          <ProfileFormLabelledInput
            label="Chanel"
            name="makeup_brands"
            value="chanel"
            type="checkbox"
            checked={localData.makeupBrands.includes("chanel")}
            onChange={() => onMakeupBrandsChange("chanel")}
          />
          <ProfileFormLabelledInput
            label="Fenty Beauty"
            name="makeup_brands"
            value="fenty_beauty"
            type="checkbox"
            checked={localData.makeupBrands.includes("fenty_beauty")}
            onChange={() => onMakeupBrandsChange("fenty_beauty")}
          />
          <ProfileFormLabelledInput
            label="Estee Lauder"
            name="makeup_brands"
            value="estee_lauder"
            type="checkbox"
            checked={localData.makeupBrands.includes("estee_lauder")}
            onChange={() => onMakeupBrandsChange("estee_lauder")}
          />
          <ProfileFormLabelledInput
            label="Rare Beauty"
            name="makeup_brands"
            value="rare_beauty"
            type="checkbox"
            checked={localData.makeupBrands.includes("rare_beauty")}
            onChange={() => onMakeupBrandsChange("rare_beauty")}
          />
          <ProfileFormLabelledInput
            label="Nars"
            name="makeup_brands"
            value="nars"
            type="checkbox"
            checked={localData.makeupBrands.includes("nars")}
            onChange={() => onMakeupBrandsChange("nars")}
          />
          <ProfileFormLabelledInput
            label="Laura Mercier"
            name="makeup_brands"
            value="laura_mercier"
            type="checkbox"
            checked={localData.makeupBrands.includes("laura_mercier")}
            onChange={() => onMakeupBrandsChange("laura_mercier")}
          />
          <ProfileFormLabelledInput
            label="Benefit"
            name="makeup_brands"
            value="benefit"
            type="checkbox"
            checked={localData.makeupBrands.includes("benefit")}
            onChange={() => onMakeupBrandsChange("benefit")}
          />
          <ProfileFormLabelledInput
            label="Milk Makeup"
            name="makeup_brands"
            value="milk_makeup"
            type="checkbox"
            checked={localData.makeupBrands.includes("milk_makeup")}
            onChange={() => onMakeupBrandsChange("milk_makeup")}
          />
          <ProfileFormLabelledInput
            label="Tower 28"
            name="makeup_brands"
            value="tower_28"
            type="checkbox"
            checked={localData.makeupBrands.includes("tower_28")}
            onChange={() => onMakeupBrandsChange("tower_28")}
          />
          <ProfileFormLabelledInput
            label="Makeup Forever"
            name="makeup_brands"
            value="makeup_forever"
            type="checkbox"
            checked={localData.makeupBrands.includes("makeup_forever")}
            onChange={() => onMakeupBrandsChange("makeup_forever")}
          />
          <ProfileFormLabelledInput
            label="Charlotte Tilbury"
            name="makeup_brands"
            value="charlotte_tilbury"
            type="checkbox"
            checked={localData.makeupBrands.includes("charlotte_tilbury")}
            onChange={() => onMakeupBrandsChange("charlotte_tilbury")}
          />
          <ProfileFormLabelledInput
            label="Other"
            name="makeup_brands"
            value="other"
            type="checkbox"
            checked={localData.makeupBrands.includes("other")}
            onChange={() => onMakeupBrandsChange("other")}
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

export default ProfileForm3;
