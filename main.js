document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("nav-on-top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("nav-on-top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (
    email === "dimagibat@students.nu-laguna.edu.ph" &&
    password === "Dimagibs1234"
  ) {
    alert("Login successful!");
    window.location.href = "index.html";
    return false;
  } else if (
    email === "juandc@librarian.nu-laguna.edu.ph" &&
    password === "  "
  ) {
    alert("Login successful!");
    window.location.href = "Librarian_home.html";
    return false;
  } else if (
    email === "dalisayc@admin.nu-laguna.edu.ph" &&
    password === "CardoD123"
  ) {
    alert("Login successful!");
    window.location.href = "Admin_home.html";
    return false;
  } else {
    alert("Incorrect login details");
    return false;
  }
}

const container = document.getElementById("singin-container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
