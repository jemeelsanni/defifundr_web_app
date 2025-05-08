export interface StepperProps {
  currentStep: number;
  totalSteps?: number;
}

const Stepper = ({ currentStep, totalSteps = 4 }: StepperProps) => {
  return (
    <div className="flex items-center justify-start gap-3 py-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index} className="h-[5px] flex-1 rounded-lg">
          <div
            className={`h-full rounded-lg transition-colors duration-300 ${
              index + 1 <= currentStep
                ? "bg-primary-200"
                : "bg-gray-200 dark:bg-gray-300"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Stepper;
