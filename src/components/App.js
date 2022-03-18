import React, { useState } from "react";
import "../styles/App.css";
import validator from "validator";
const App = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [nameError, setnameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  function checkError() {
    if (!name) {
      setnameError("name not present");
    } else if (name && (name.length < 3 || name.length > 20)) {
      setnameError("Name should be atleast 4 chars and less than 20 chars");
    } else {
      setnameError("");
    }

    if (!email) {
      setemailError("email not present");
    } else if (email && validator.isEmail(email)) {
      setemailError("");
    } else {
      setemailError("Not a valid email");
    }

    if (!password) {
      setpasswordError("password not present");
    } else if (password && (password.length < 6 || password.length > 30)) {
      setpasswordError(
        "Password should be atleast 6 chars and less than 30 chars"
      );
    } else {
      setpasswordError("");
    }
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
        <label id="namelbl">{nameError}</label>
        <input
          id="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
        />
        <label id="emaillbl">{emailError} </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="Password"
        />
        <label id="passwordlbl">{passwordError}</label>
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
