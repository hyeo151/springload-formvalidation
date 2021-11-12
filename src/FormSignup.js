/**
 * Main sign up form, this components will call useForm to pass all the eventhandlers and input values
 */

import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormSignup = (props) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    props.submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="colour" className="form-label">
            Colour
          </label>
          <select
            name="colour"
            id="colour"
            onChange={(event) => props.onChange(event.target.value)}
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <div className="form-inputs">
          <label htmlFor="animals" className="form-label">
            Animals
          </label>
          <select name="animals" id="animals" onChange={handleChange} multiple>
            <option value="bear">Bear</option>
            <option value="tiger">Tiger</option>
            <option value="snake">Snake</option>
            <option value="donkey">Donkey</option>
          </select>
        </div>
        {values.animals === "tiger" && (
          <div className="form-inputs">
            <label htmlFor="tiger" className="form-label">
              Type of Tiger
            </label>
            <input
              id="tiger"
              type="text"
              name="tiger"
              className="form-input"
              placeholder="Enter your tiger"
              value={values.tiger}
              onChange={handleChange}
            />
            {errors.tiger && <p>{errors.tiger}</p>}
          </div>
        )}

        <button className={`form-input-btn ${props.value}`} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
