import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import { AddBusinessForm } from "../../components/auth/AddBusinessForm";
import { AUTH_STEPS } from "../../utils/constant";

export const CreateBusinessDetail = () => {
  return (
    <div className="space-y-8">
      <AuthFormHeader
        title="Add business details"
        currentStep={AUTH_STEPS.BUSINESS_INFO}
        totalSteps={4}
        description="Tell us about your business"
      />
      <AddBusinessForm />
    </div>
  );
};
