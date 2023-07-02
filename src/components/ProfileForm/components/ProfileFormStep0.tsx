import ProfileFormLabelledInput from "./ProfileFormLabelledInput";

const ProfileFormStep0 = () => {
  return (
    <>
      <fieldset className="mb-2">
        <legend className="text-base mb-2 font-bold">
          Which gender do you identify as?
        </legend>
        <div className="flex flex-col">
          <ProfileFormLabelledInput
            name="gender"
            value="female"
            label="Female"
            type="radio"
          />
          <ProfileFormLabelledInput
            name="gender"
            value="male"
            label="Male"
            type="radio"
          />
          <ProfileFormLabelledInput
            name="gender"
            value="other"
            label="Other"
            type="radio"
          />
        </div>
      </fieldset>
      <fieldset className="mb-2">
        <legend className="mb-2 font-bold">What is your date of birth?</legend>
        <label>
          <input name="date_of_birth" value="date_of_birth" type="date" />
        </label>
      </fieldset>
      <fieldset className="mb-2 flex flex-col">
        <legend className="mb-2 font-bold">
          What is your goal? (select as many as needed)
        </legend>
        <ProfileFormLabelledInput
          label="Create a skincare routine"
          name="interests"
          value="routine"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Improve my skincare routine"
          name="interests"
          value="improve"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Discover new products"
          name="interests"
          value="new_products"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Other"
          name="interests"
          value="other"
          type="checkbox"
        >
          <input type="text" className="border" />
        </ProfileFormLabelledInput>
      </fieldset>
    </>
  );
};

export default ProfileFormStep0;
