import ProfileFormLabelledInput from "./ProfileFormLabelledInput";

const ProfileForm3 = () => {
  return (
    <div className="flex justify-around">
      <fieldset className="mb-2 flex flex-col">
        <legend className="mb-2 font-bold"> Skincare brands you use </legend>
        <ProfileFormLabelledInput
          label="Paula's Choice"
          name="skincare_brands"
          value="paula_s_choice"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="The Ordinary"
          name="skincare_brands"
          value="the_ordinary"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Inkey List"
          name="skincare_brands"
          value="inkey_list"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Estee Lauder"
          name="skincare_brands"
          value="estee_lauder"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Cerave"
          name="skincare_brands"
          value="cerave"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="REN"
          name="skincare_brands"
          value="ren"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Caudalie"
          name="skincare_brands"
          value="caudalie"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Belief"
          name="skincare_brands"
          value="belief"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Dr. Jart"
          name="skincare_brands"
          value="jart"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Fresh"
          name="skincare_brands"
          value="fresh"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Innisfree"
          name="skincare_brands"
          value="innisfree"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Laneige"
          name="skincare_brands"
          value="laneige"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Pixie"
          name="skincare_brands"
          value="pixie"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Sunday Rileys"
          name="skincare_brands"
          value="sunday_riley"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Summer Friday"
          name="skincare_brands"
          value="summer_fridays"
          type="checkbox"
        />

        <ProfileFormLabelledInput
          label="Other"
          name="skincare_brands"
          value="other"
          type="checkbox"
        >
          <input type="text" className="border" />
        </ProfileFormLabelledInput>
      </fieldset>
      <fieldset className="mb-2 flex flex-col">
        <legend className="mb-2 font-bold"> Makeup brands you use </legend>

        <ProfileFormLabelledInput
          label="Dior"
          name="skincare_brands"
          value="dior"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Chanel"
          name="skincare_brands"
          value="chanel"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Fenty Beauty"
          name="skincare_brands"
          value="fenty_beauty"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Estee Lauder"
          name="skincare_brands"
          value="estee_lauder"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Rare Beauty"
          name="skincare_brands"
          value="rare_beauty"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Nars"
          name="skincare_brands"
          value="nars"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Laura Mercier"
          name="skincare_brands"
          value="laura_mercier"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Benefit"
          name="skincare_brands"
          value="benefit"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Milk Makeup"
          name="skincare_brands"
          value="milk_makeup"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Tower 28"
          name="skincare_brands"
          value="tower_28"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Makeup Forever"
          name="skincare_brands"
          value="makeup_forever"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Charlotte Tilbury"
          name="skincare_brands"
          value="charlotte_tilbury"
          type="checkbox"
        />
        <ProfileFormLabelledInput
          label="Other"
          name="skincare_brands"
          value="other"
          type="checkbox"
        >
          <input type="text" className="border" />
        </ProfileFormLabelledInput>
      </fieldset>
    </div>
  );
};

export default ProfileForm3;
