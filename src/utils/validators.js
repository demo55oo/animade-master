// =========== validation functions ==========
export const emailValidation = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};
export const passValidation = (pass) => {
  return /^(?=.*[a-z])(?=.*\d)(?=.*[-\\#_@$!%*?&])[A-Za-z\d-\\#_@$!%*?&]{8,}$/.test(
    pass
  );
};
export const userNameValidation = (userName) => {
  return userName;
};
export const phoneValidation = (phone) => {
  return phone?.length > 3;
};
export const confirmPassValidation = (pass, confirmpassword) => {
  return pass === confirmpassword;
};

// ========== form validation ===========
export const formValidation = (...requires) => {
  return requires.every((require) => require);
};

// ========== messages ===========
export const emailMsg = "Enter in the format: name@example.com !";
export const passMsg =
  "password should contain atleast one number, letter, one special character [@$!%*?&_-#]";
export const userNameMsg = "This Field Can't Be Empty!";
export const phoneMsg = "Number atleast 4 charachter !";
export const confirmPassMsg =
  "confirm Password Must be Matched with Password !";
