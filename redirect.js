const userState = JSON.parse(localStorage.getItem("state")) || false;

const path = window.location.pathname;

if (path == "/Landingpage.html" || path == "/login.html" || path == "/signup.html") {
   if (userState) {
      window.location.href = "/index.html";
   }
} else {
   if (!userState) {
      window.location.href = "/Landingpage.html";
   }
}
