import { article } from "framer-motion/client";
import * as yup from "yup";
import { z } from "zod";

export const validateLogin = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Account email is missing"),
    password: yup
      .string()
      .trim()
      .min(8, "Password is too short")
      .required("Account password is missing"),
  });
  return validationSchema;
};

export const validateUpdateProfile = () => {
  const phoneRegExp = /^[\d|\+|\(]+[\)|\d|\s|-]*[\d]$/;
  const validationSchema = yup.object({
    name: yup.string().trim().required("Name is missing"),
    country: yup.string().trim().required("Please select your country"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Invalid phone number. Follow the sample")
      .required("Phone number is missing"),
  });
  return validationSchema;
};

export const validateUpdatePassword = () => {
  const validationSchema = yup.object({
    oldPassword: yup.string().required("Old Password is required"),
    newPassword: yup
      .string()
      .required("Account Password is required")
      .min(8, "Password is too short"),
    confirmNewPassword: yup
      .string()
      .required("Confirm Account Password")
      .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
  });
  return validationSchema;
};

export const validateForgotPassword = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Account email is missing"),
  });
  return validationSchema;
};

export const validateResetPassword = () => {
  const validationSchema = yup.object({
    password: yup
      .string()
      .trim()
      .min(8, "Password is too short")
      .required("Password is missing"),
    confirmPassword: yup
      .string()
      .required("Confirm Account Password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  return validationSchema;
};

export const validateOtp = () => {
  const validationSchema = yup.object().shape({
    otp: yup
      .string()
      .trim()
      .min(4, "OTP is incomplete")
      .max(5, "OTP digits cannot be more than 4 characters long")
      .required("Please provide the OTP"),
  });
  return validationSchema;
};

export const validateAddAdmin = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().trim().required("Full Name is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Account email is missing"),
    username: yup.string().trim().required("Admin username is required"),
  });
  return validationSchema;
};
export const validateAddUser = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().trim().required("Full Name is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Account email is missing"),
  });
  return validationSchema;
};









/// # COURSES PAGE VALIDATIONS ###

export const validateBasicCourseDetails = () => {
  const validationSchema = yup.object({
    title: yup.string().required("Please, provide course title"),
    category: yup.string().required("Please, select course category"),
    level: yup.string().required("Please, select course level"),
    language: yup.string().required("Please, select course language"),
    what_to_taught: yup.string().required("Please, provide what will be taught in this course"),
    description: yup.string().required("Please, provide course description"),
  });
  return validationSchema;
}

export const validateCourseCurriculum = () => {
  const validateSchema = yup.object({
    title: yup.string().required("Please, provide section title"),
    objective: yup.string().required("Please, provide learning objective"),
  });
  return validateSchema;
}

export const validateMaterialValues = () => {
  const validationSchema = yup.object({
    video: yup.array().of(yup.string().required("Video is required")).min(1, "Please, upload at least one video"),
    article: yup.array().of(yup.string().required("Article content is required")).min(1, "Please, provide at least one article"),
  });
  return validationSchema;
}

export const validateCourseRequirementValues = () => {
  const validationSchema = yup.object({
    requirements: yup.array().of(yup.string().trim()),
    audience: yup.array().of(yup.string().trim()),   
    duration: yup.string().trim(),                   
    certificate: yup.boolean().default(false),      
  });
  return validationSchema;
}

export const validateCoursePriceValues = () => {
  const validationSchema = yup.object({
    currency: yup.string().required("Please, select currency"),
    price: yup.number().typeError("Price must be a number").required("Please, provide course price"),
    discount_percent: yup.number().typeError("Discount price must be a number").notRequired(), // optional, no dependency
  });

  return validationSchema;
};

export const validateAssessmentConfigurationValues = () => {
  const validationSchema = yup.object({
    title: yup.string().required("Please, provide test title"),
    duration: yup.number().required("Please, provide time limit"),
    passingScore: yup.number().required("Please, provide passing score"),
    attempts: yup.string().required("Please, select number of attempts allowed"),
  });
  return validationSchema;
}