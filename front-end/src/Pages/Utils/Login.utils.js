// new commit...
console.log('test');

const validateEmail = (email) => {
  const rejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return rejex.test(email);
};

const validatePassword = (password) => {
  const minLengthPassword = 6;
  return password.length >= minLengthPassword;
};

const submitIsAllowed = (email, password) => (
  validateEmail(email) && validatePassword(password)
);

export {
  validateEmail,
  validatePassword,
  submitIsAllowed,
};
