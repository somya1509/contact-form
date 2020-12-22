import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import './Form.css'
/**
 * @author
 * @function FormSignUp
 **/

const FormSignUp = (submitForm) => {
  const { handleChange, handleSubmit, values, error } = useForm(validateInfo, submitForm);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Lets Get Started! Create your account by filling out your details
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter Your Username"
            value={values.username}
            onChange={handleChange}
          />
          {error.username && <p>{error.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter Your Email"
            value={values.email}
            onChange={handleChange}
          />
          {error.email && <p>{error.email}</p>}
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
            placeholder="Enter Your Password"
            value={values.password}
            onChange={handleChange}
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Enter Your Password"
            value={values.password2}
            onChange={handleChange}
          />
          {error.password2 && <p>{error.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Submit
        </button>
        <span className="form-input-login">
          Already have an Account <a href="#">Login Here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignUp;
