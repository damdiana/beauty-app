import ProfileFormLabelledInput from "./ProfileFormLabelledInput";

const ProfileFormStep1 = () => {
  return (
    <div className="flex justify-around">
      <div>
        <fieldset className="mb-2 flex flex-col">
          <legend className="mb-2 font-bold">What is your skin type?</legend>
          <ProfileFormLabelledInput
            label="Dry"
            name="skin_type"
            value="dry"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Oily"
            name="skin_type"
            value="oily"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Combination"
            name="skin_type"
            value="combination"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Sensitive"
            name="skin_type"
            value="sensitive"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Normal"
            name="skin_type"
            value="normal"
            type="checkbox"
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
          />
          <ProfileFormLabelledInput
            label="Dull and uneven skin tone"
            name="skin_concerns"
            value="dull"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Aging skin"
            name="skin_concerns"
            value="aging"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Wrinkles and fine lines"
            name="skin_concerns"
            value="wrinkles"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Sun damage"
            name="skin_concerns"
            value="sun_damage"
            type="checkbox"
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
          />
          <ProfileFormLabelledInput
            label="Atopic dermatitis (Eczema)"
            name="skin_concerns"
            value="eczema"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Melasma"
            name="skin_concerns"
            value="melasma"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Milia"
            name="skin_concerns"
            value="milia"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Hyperpigmentation"
            name="skin_concerns"
            value="hyperpigmentation"
            type="checkbox"
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
          />
          <ProfileFormLabelledInput
            label="Moisturizer"
            name="skin_concerns"
            value="moisturizer"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Serum"
            name="skin_concerns"
            value="serum"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Toner"
            name="skin_concerns"
            value="toner"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Eye Cream"
            name="skin_concerns"
            value="eyecream"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Face Mask"
            name="skin_concerns"
            value="facemask"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Micelar water"
            name="skin_concerns"
            value="micelarwater"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="Clenser balm"
            name="skin_concerns"
            value="clenserbalm"
            type="checkbox"
          />
          <ProfileFormLabelledInput
            label="I don't have a routine"
            name="skin_concerns"
            value="noroutine"
            type="checkbox"
          />
        </fieldset>
      </div>
    </div>
  );
};

export default ProfileFormStep1;
