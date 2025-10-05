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

export const rejectProductValues = () => {
  const initialValues = {
    rejectReason: "",
  };
  return initialValues;
};


//Settings 

export const addBrandValues = () => {
  const initialValues = {
    brandType: "",
  };
  return initialValues;
};

export const addCategoryValues = () => {
  const initialValues = {
    category: "",
  };
  return initialValues;
};
export const bulkUploadCategoryValues = () => {
  const initialValues = {
    csvFile: null, // CSV file
  };
  return initialValues;
};

export const addSubcategoryValues = () => {
  const initialValues = {
    category: "",
    subcategory: "",
  };
  return initialValues;
};

export const addCollectionValues = () => {
  const initialValues = {
    collection: "",
  };
  return initialValues;
};


