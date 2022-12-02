const logoutButton = document.querySelector(".logout");

function logout() {
   localStorage.setItem("state", JSON.stringify(false));

   window.location.href = "/Landingpage.html";
}

logoutButton.addEventListener("click", logout);

// window.location.href = "/Landingpage.html";
