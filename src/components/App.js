import React, { useState } from "react";
import "../styles/App.css";
import { signUpFormValidation } from "../utils/validation";
const App = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, setErrors] = useState([]);

  function checkError() {
    const data = { name, email, password };
    setErrors(signUpFormValidation(data));
    console.log(errors);
  }

  return (
    <>
      <form>
        <input
          id="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="Name"
        />
        <label id="namelbl">{errors.name}</label>
        <input
          id="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
        />
        <label id="emaillbl">{errors.email} </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="Password"
        />
        <label id="passwordlbl">{errors.password}</label>
        <div>
          <label>Consent</label>
          <input type="checkbox" id="consent" />
        </div>

        <button
          id="submit"
          onClick={(e) => {
            e.preventDefault();
            checkError();
          }}
        >
          Signup
        </button>
      </form>
    </>
  );
};

export default App;
