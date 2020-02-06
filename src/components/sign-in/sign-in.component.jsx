import React, { useState } from "react";

import FormInput from "./../form-input/form-input.component";

import "./sign-in.styles.scss";
import CustomButton from "./../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase-utils";

const SignIn = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [state, setState] = useState({
    password: "",
    email: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    setState({ ...state, email: "", password: "" });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  };
  const { email, password } = state;
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          value={email}
          name="email"
          type="email"
          required
          handleChange={handleChange}
          label="email"
        />

        <FormInput
          value={password}
          name="password"
          type="password"
          required
          handleChange={handleChange}
          label="password"
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
