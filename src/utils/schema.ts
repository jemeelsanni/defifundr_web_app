import { z } from "zod";

export const validationSchemas = {
  email: z.string().email("Please enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    ),

  name: (message: string) => z.string().min(1, message),

  phone: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),

  otp: z.string().regex(/^\d{6}$/, "Please enter a valid 6-digit code"),

  // Terms and conditions agreement validation
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions" }),
  }),
};

export const createAccountSchema = z.object({
  firstName: validationSchemas.name("First name field cannot be empty"),
  lastName: validationSchemas.name("Last name field cannot be empty"),
  email: validationSchemas.email,
  agreeToTerms: validationSchemas.agreeToTerms,
});

export const newPasswordSchema = z
  .object({
    newPassword: validationSchemas.password,
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: validationSchemas.email,
  password: z.string().min(1, "Password is required"),
});

export const forgotPasswordSchema = z.object({
  email: validationSchemas.email,
});

export const otpSchema = z.object({
  otp: validationSchemas.otp,
});

export const businessSchema = z.object({
  companyName: validationSchemas.name("company name field cannot be empty"),
  companySize: z.string().min(1, "Please select a company size"),
  companyIndustry: z.string().min(1, "Please select an industry"),
  headquarterCountry: z.string().min(1, "Please select a country"),
  businessDescription: validationSchemas.name(
    "Business description field cannot be empty"
  ),
});

export type CreateAccountSchemaType = z.infer<typeof createAccountSchema>;
export type NewPasswordFormSchemaType = z.infer<typeof newPasswordSchema>;
export type SignInSchemaType = z.infer<typeof signInSchema>;
export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
export type OtpSchemaType = z.infer<typeof otpSchema>;
export type BusinessSchemaType = z.infer<typeof businessSchema>;
