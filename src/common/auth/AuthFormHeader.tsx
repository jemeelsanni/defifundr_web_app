import { FC } from "react";
import { AuthFormHeaderProps } from "../../types/types";
export const AuthFormHeader: FC<AuthFormHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <article className="space-y-2 ">
      <h2 className="text-5xl font-bold text-gray-600 dark:text-gray-150 ">
        {title}
      </h2>
      <p className="max-w-md text-xs font-medium text-gray-400 sm:text-base in-dark:text-gray-200">
        {description}
      </p>
    </article>
  );
};
