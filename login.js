const formLogin = document.querySelector(".signinform");
const emailInput = document.getElementById("Email");
const passwordInput = document.getElementById("Password");

function login(e) {
   e.preventDefault();

   let valueEmail = emailInput.value.trim();
   let valuePassword = passwordInput.value.trim();

   let arrayObjectsLogin = JSON.parse(localStorage.getItem("signup")) || [];

   for (let index = 0; index < arrayObjectsLogin.length; index++) {
      if (
         arrayObjectsLogin[index].email == valueEmail &&
         arrayObjectsLogin[index].password == valuePassword
      ) {
         localStorage.setItem("state", JSON.stringify(true));

         window.location.href = "/";

         break;
      }
      console.log("nop");
   }
}

formLogin.addEventListener("submit", login);
