import { countries } from "countries-list";
import { BusinessSchemaType, businessSchema } from "../../utils/schema";
import { useZodForm } from "../../hooks/useZodForm";
import FormSelectInput from "../form/FormSelectInput";
import FormInput from "../form/FormInput";
import { isValid } from "zod";

export const AddBusinessForm = () => {
  const {
    register,
    formState: { errors, touchedFields },
    handleSubmit,
  } = useZodForm<BusinessSchemaType>(businessSchema, {
    defaultValues: {
      businessDescription: "",
      companyIndustry: "",
      companyName: "",
      companySize: "",
      headquarterCountry: "",
    },
  });

  //   placeHolder option for select
  const options = [
    "option 1",
    "option 2",
    "option 3",
    "option 4",
    "option 5",
    "option 6",
    "option 7",
  ];

  const onSubmit = (data: BusinessSchemaType) => {
    console.log("data", data);
  };

  const countriesData = Object.values(countries).map((country) => country.name);
  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <FormInput
            id="companyName"
            label="Company name"
            register={register}
            error={errors.companyName}
            touched={touchedFields.companyName}
            placeholder="What’s the name of your company"
          />

          <div className="grid  grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-4 w-full justify-between">
            <FormSelectInput
              id="companySize"
              label="Company size"
              options={options}
              register={register}
              error={errors.companySize}
              touched={touchedFields.companySize}
              placeholder="Company size"
            />

            <FormSelectInput
              id="companyIndustry"
              label="Company Industry"
              options={countriesData}
              register={register}
              error={errors.companyIndustry}
              touched={touchedFields.companyIndustry}
              placeholder="Select your industry"
            />
          </div>

          <FormSelectInput
            id="headquarterCountry"
            label="Headquarter country"
            options={options}
            register={register}
            error={errors.headquarterCountry}
            touched={touchedFields.headquarterCountry}
            placeholder="Where country is your headquarter located?"
          />

          <FormInput
            id="businessDescription"
            label="What does your business do?"
            register={register}
            error={errors.businessDescription}
            touched={touchedFields.businessDescription}
            placeholder="Describe what your company does"
          />
        </div>
        <div className="w-full h-14">
          <button
            type="submit"
            className="button button--secondary !w-full !h-full"
            disabled={!isValid}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};
