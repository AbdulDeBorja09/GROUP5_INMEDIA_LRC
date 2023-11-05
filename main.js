// FIXED NAVBAR
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("nav-on-top").classList.add("fixed-top");
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("nav-on-top").classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  });
});
// FIXED LOGIN FUNCTION
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
    password === "AkosiJuan123"
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

// LOGIN ANIMATION
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// BOOK SEARCH FUNCTION
function search() {
  const searchInput = document.getElementById("search-item");
  const searchTerm = searchInput.value.toLowerCase();
  const books = document.querySelectorAll(".book");

  books.forEach((book) => {
    const bookTitle = book.querySelector("h3").textContent.toLowerCase();
    if (bookTitle.includes(searchTerm)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
}
// SORT BOOKS FUNCTIONS
function sortBooks() {
  const selectedCategory = document.getElementById("sort").value;
  const books = document.querySelectorAll(".book");

  books.forEach((book) => {
    const category = book.getAttribute("data-category");
    if (selectedCategory === "all" || selectedCategory === category) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
}
