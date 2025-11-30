export const loginValues = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  return initialValues;
};

export const updateProfileValues = (data) => {
  const initialValues = {
    name: data.name,
    username: data.username,
    email: data.email,
    phone: data.phone,
    country: data.country,
  };
  return initialValues;
};

export const editPaswordValues = () => {
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };
  return initialValues;
};

export const forgotPasswordValues = () => {
  const initialValues = {
    email: "",
  };
  return initialValues;
};

export const resetPasswordValues = () => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  return initialValues;
};

export const otpValues = () => {
  const initialValues = {
    otp: "",
  };
  return initialValues;
};

export const addAdminValues = () => {
  const initialValues = {
    fullName: "",
    email: "",
    role: "",
  };
  return initialValues;
};



/// LMS APP VALUES 

export const basicCourseDetailValues = () => {
  const initialValues = {
    title: "",
    category: "",
    level: "",
    language: "",
    what_to_taught: "",
    description: "",
  };
  return initialValues;
};

export const courseCurriculumValues = () => {
  const initialValues = {
    title: "",
    objective: "",
  };
  return initialValues;
};

export const videoMaterialValues = () => {
  const initialValues = {
    video: "",
    article: ""
  }; 
  return initialValues
}


export const courseRequirementsValues = () => {
  const initialValues = {
    requirements: [""],
  };
  return initialValues;
}; 

export const coursePublishValues = () => {
  const initialValues = {
    currency: "USD",
    price: "",
    hasDiscount: false,
    isFree: false,
    discountPrice: "",
  };
  return initialValues;
}

export const assessmentConfigurationValues = () => {
  const initialValues = {
    title: "", 
    duration: "",
    passingScore: "",
    attempts: "1",
  }
  return initialValues;
}