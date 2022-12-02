// form fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm");

//form

let arrayObjects = [];
let jsonArray = JSON.parse(localStorage.getItem("signup"));

arrayObjects = jsonArray || [];

const form = document.querySelector(".signupform");

function saveRegister(event) {
   event.preventDefault();

   let valueName = nameInput.value.trim();
   let valueEmail = emailInput.value.trim();
   let valuePassword = passwordInput.value.trim();
   let valuePasswordConfirm = confirmPasswordInput.value.trim();

   if (valueName == "") {
      alert("Ingresa tu nombre bien");
   } else if (valueEmail == "") {
      alert("Ingresa tu email bien");
   } else if (valuePassword == "") {
      alert("Ingresa tu password bien");
   } else if (valuePasswordConfirm == "") {
      alert("Ingresa tu password repetida bien");
   } else {
      let registerValues = {
         name: valueName,
         email: valueEmail,
         password: valuePassword,
         confirm: valuePasswordConfirm,
      };

      arrayObjects.push(registerValues);

      localStorage.setItem("signup", JSON.stringify(arrayObjects));
      alert("Registro listo");
   }
}

form.addEventListener("submit", saveRegister);
