const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function isEmailAddress(str) {
  return str.match(pattern);
}

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const data = { name, email, password };
  const errors = signUpFormValidation(data);
  const lbl = document.getElementsByTagName("label");
  for (let i = 0; i < lbl.length; i++) {
    lbl[i].textContent = "";
  }
  for (const type in errors) {
    document.getElementById(type + "lbl").textContent = errors[type];
  }
});

const signUpFormValidation = (formData) => {
  const error = {};
  const fields = ["email", "password", "name"];
  fields.forEach((field) => {
    if (!formData[`${field}`]) {
      error[[field]] = `${field} not present`;
    }
  });
  if (
    formData.name &&
    (formData.name.length < 3 || formData.name.length > 20)
  ) {
    error["name"] = "Name should be atleast 4 chars and less than 20 chars";
  }
  if (
    formData.password &&
    (formData.password.length < 6 || formData.password.length > 30)
  ) {
    error["password"] =
      "Password should be atleast 6 chars and less than 30 chars";
  }

  if (formData.email && isEmailAddress(formData.email) === null) {
    error["email"] = "Not a valid email";
  }
  if (Object.keys(error).length === 0) return null;
  return error;
};

export default { signUpFormValidation };
