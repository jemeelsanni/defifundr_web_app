import { countries } from "countries-list";

export const AddBusinessForm = () => {
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
  return (
    <div>
      <form className="space-y-8">
        <div className="space-y-6">
          <div className="form-control">
            <label htmlFor="companyName">Company name</label>
            <input
              type="text"
              id="companyName"
              placeholder="What’s the name of your company"
            />
          </div>
          <div className="grid  grid-cols-1 xl:grid-cols-2 gap-4 w-full justify-between">
            <div className="form-control ">
              <label htmlFor="companySize">Company size</label>
              <select
                name="companySize"
                id="companySize"
                className="invalid:!text-red-200"
              >
                <option value="" className="">
                  Select
                </option>
                {options.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="companyIndustry">Company Industry</label>
              <select name="companyIndustry" id="companyIndustry" className="">
                <option value="" className="">
                  Select your industry
                </option>
                {options.map((opt, i) => (
                  <option key={i} value={opt} className="capitalize">
                    {opt}
                  </option>
                ))}{" "}
              </select>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="headquarterCountry">Headquarter country</label>
            <select
              name="headquarterCountry"
              id="headquarterCountry"
              className=""
            >
              <option value="" className="">
                Where country is your headquarter located?
              </option>
              {Object.values(countries).map((country, i) => (
                <option key={i} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="businessDescription">
              What does your business do?
            </label>
            <input
              type="text"
              id="businessDescription"
              name="businessDescription"
              placeholder="Describe what your company does"
            />
          </div>
        </div>
        <div className="w-full h-14">
          <button
            type="submit"
            className="button button--secondary !w-full !h-full"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};
