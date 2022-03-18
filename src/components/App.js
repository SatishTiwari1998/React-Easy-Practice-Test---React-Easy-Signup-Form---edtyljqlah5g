import React from "react";
import "../styles/App.css";
import { signUpFormValidation } from "../utils/validation.js";

const App = () => {
  return (
    <>
      <form>
        <input id="name" />
        <label id="namelbl"></label>
        <input id="email" />
        <label id="emaillbl"></label>
        <input id="password" type="password" />
        <label id="passwordlbl"></label>
        <br />
        <input type="checkbox" id="consent" /> Consent.
        <br />
        <button
          id="submit"
          type="submit"
          onClick={() => {
            signUpFormValidation();
          }}
        >
          Signup
        </button>
      </form>
    </>
  );
};

export default App;

