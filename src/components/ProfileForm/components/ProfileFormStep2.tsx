import ProfileFormLabelledInput from "./ProfileFormLabelledInput";

const ProfileFormStep2 = () => {
  return (
    <div className="flex justify-around">
      <fieldset className="mb-2 text-center item-center justify-center">
        <legend className="text-base mb-2 font-bold">
          Do you wear makeup?
        </legend>
        <div className="flex justify-around">
          <ProfileFormLabelledInput
            label="Yes"
            value="yes"
            type="radio"
            name="do_you_wear_makeup"
          />
          <ProfileFormLabelledInput
            label="No"
            value="no"
            type="radio"
            name="do_you_wear_makeup"
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
        />
        <ProfileFormLabelledInput
          label="Concelear"
          value="concelear"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Blush"
          value="blush"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Bronzer"
          value="bronzer"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Contour"
          value="contour"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Eyeliner"
          value="eyeliner"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Mascara"
          value="mascara"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Eyeshadow"
          value="eyeshadow"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Lipstick"
          value="lipstick"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Lipliner"
          value="lipliner"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Powder"
          value="powder"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Highlighter"
          value="highlighter"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Primer"
          value="primer"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Eyebrow products (pencil, gel, ect)"
          value="eyebrow"
          type="checkbox"
          name="useproducts"
        />
        <ProfileFormLabelledInput
          label="Other"
          value="other"
          type="checkbox"
          name="useproducts"
        >
          <input type="text" className="border" />
        </ProfileFormLabelledInput>
      </fieldset>
    </div>
  );
};

export default ProfileFormStep2;
