import { AuthFormHeader } from "../../common/auth/AuthFormHeader";
import { AddBusinessForm } from "../../components/auth/AddBusinessForm";

export const CreateBusinessDetail = () => {
  return (
    <div className="space-y-8">
      <AuthFormHeader
        title="Add business details"
        description="Tell us about your business"
      />
      <AddBusinessForm />
    </div>
  );
};
