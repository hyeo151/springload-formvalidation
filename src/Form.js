/**
 * This Component controls sign up form and sucess form.
 * Once user has submitted the form, state will be changed and show sucess form.
 * It also maintains state for left panel color value and color value is passed from the child component.
 */

import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [color, setColor] = useState("blue");
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className={`form-content-left ${color}`}>
          <img src={`img/tiger.svg`} alt="animal" className="form-img" />
        </div>
        {!isSubmitted ? (
          <FormSignup
            onChange={(value, value_2) => {
              setColor(value);
            }}
            submitForm={submitForm}
          />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
