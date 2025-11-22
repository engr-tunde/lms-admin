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
    fullName: yup.string().trim().required("Full Name is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Account email is missing"),
    role: yup.string().trim().required("Admin role is required"),
  });
  return validationSchema;
};

export const validaterejectProduct = () => {
  const validationSchema = yup.object().shape({
    rejectReason: yup
      .string()
      .trim()
      .required("Kindly state the reason for the rejection"),
  });
  return validationSchema;
};




//# SETTINGS PAGE VALIDATIONS # 

export const validateAddBrandTypeValues = () => {
  const validationSchema = yup.object({
    brandType: yup.string().required("Please, provide brand type"),
    description: yup.string().required("Please, provide brand type description"),
  });
  return validationSchema;
}

export const validateAddCategoryValues = () => {
  const validationSchema = yup.object({
    category: yup.string().required("Please, provide category name"),
  });
  return validationSchema;
}
export const validateBulkUploadCategoryValues = () => {
  const validationSchema = yup.object({
    csvFile: yup
      .mixed()
      .required("Please, upload a CSV file")
      .test(
        "fileType",
        "Only CSV files are allowed",
        (value) => value && value.type === "text/csv"
      ),
  });
  return validationSchema;
};


export const validateAddSubcategoryValues = () => {
  const validationSchema = yup.object({
    category: yup.string().required("Kindly pick a category from the list"),
    subcategory: yup.string().required("Please, provide subcategory name"),
  });
  return validationSchema;
}
export const validateAddCollectionValues = () => {
  const validationSchema = yup.object({
    collection: yup.string().required("Please, provide collection name"),
  });
  return validationSchema;
}



//# BRANDS PAGE VALIDATIONS #

export const validateRejectBrand = () => {
  const validationSchema = yup.object().shape({
    rejectReason: yup
      .string()
      .trim()
      .required("Kindly state the reason for the rejection"),
  });
  return validationSchema;
};


// # USERS PAGE VALIDATIONS

export const validateStatusDetails = () => {
  const validationSchema = yup.object().shape({
    additionalDetails: yup
      .string()
      .trim()
      .required("Kindly provide additional details for decision"),
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

export const validateVideoMaterialValues = () => {
  const validationSchema = yup.object({
    video: yup.string().required("Please, upload a video file"),
    article: yup.string().required("Please, provide article content"),
  });
  return validationSchema;
}

export const validateCoursePrice = () => {
  const validationSchema = yup.object({
    currency: yup.string().required("Please, select currency"),
    price: yup.number().required("Please, provide course price"),
  });
  return validationSchema;
}