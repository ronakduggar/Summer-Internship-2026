document.getElementById("registerbtn").addEventListener("click", validateForm);

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm").value;

  if (name == "") {
    alert("Name must be filled out");
  } else if (email == "") {
    alert("Email must be filled out");
  } else if (mobile.length != 10) {
    alert("Mobile number must be 10 digits");
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long");
  } else if (password != confirmPassword) {
    alert("Passwords do not match");
  } else {
    alert("Form submitted successfully!");
  }
}
