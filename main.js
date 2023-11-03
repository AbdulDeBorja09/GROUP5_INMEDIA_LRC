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

const search = () => {
  const searchbox = document.getElementById("Search-item").value.toUpperCase();
  const studentlist = document.getElementById("student-list");
  const student = document.querySelectorAll(".student");
  const sname = document.getElementsByTagName("th");

  for (var i = 0; 1 < sname.length; i++) {
    let match = student[i].getElementsByTagName("th")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        student[i].style.display = "";
      } else {
        student[i].style.display = "none";
      }
    }
  }
};

const searchInput = document.getElementById("search");
const rows = document.querySelectorAll("tbody tr");
console.log(rows);
searchInput.addEventListener("keyup", function (event) {
  const query = event.target.value.toLowerCase();
  rows.forEach((row) => {
    row.querySelector("td").textContent.toLowerCase().startsWith(query)
      ? (row.style.display = "table-row")
      : (row.style.display = "none");
  });
});

new DataTable("#example");
