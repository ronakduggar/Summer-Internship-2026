function changeName() {
  document.getElementById("studentName").innerHTML = "Aman Verma";
}

function changeColor() {
  document.getElementById("card").style.background = "#ffeaa7";
}

function changeImage() {
  document.getElementById("profileImage").src =
    "https://cdn-icons-png.flaticon.com/512/4140/4140048.png";
}

function darkMode() {
  document.body.style.background = "#000000";
  document.getElementById("card").style.background = "#333";
  document.getElementById("card").style.color = "white";
  document.getElementById("studentName").style.color = "white";
  document.getElementById("course").style.color = "#00d9ff";
  document.getElementById("college").style.color = "#ddd";
}

function hideCard() {
  document.getElementById("card").style.display = "none";
}

function showCard() {
  document.getElementById("card").style.display = "block";
}
