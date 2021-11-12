/**
 * useForm keeps all the necessary state for the form.
 * States that are kept are values,errors and isSubmitting
 * It also takes two event handlers which are handleChange and handleSubmit.
 * HandleChange will set all the changed input values as state.
 * HandleSubmit event handler will validate all inputs and also set submit state as true once called.
 */

import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    colour: "blue",
    animals: "",
    tiger: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
