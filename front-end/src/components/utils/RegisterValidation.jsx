const validateName = (name) => {
  const minLengthPassword = 12;
  return name.length >= minLengthPassword;
};

export default validateName;
