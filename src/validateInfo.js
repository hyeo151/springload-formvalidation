/**
 * Takes form-input-value when handleSubmit is called.
 * Inputs are validated and error messages are set in errors object.
 * Returns all the error messages if there are any.
 */

export default function validateInfo(values) {
  let errors = {};

  if (!values.email.trim()) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be longer than 8 characters";
  }

  if (values.animals == "tiger" && values.tiger == "") {
    errors.tiger = "Type of tiger is required";
  }
  return errors;
}
