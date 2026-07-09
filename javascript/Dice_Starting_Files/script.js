// Generate a random number between 1 and 6 using Math.random() and Math.floor().
// Create a dice image filename dynamically (e.g., dice3.png) based on the random number.

// Update the src attribute of the first dice image using setAttribute().

// Generate another random number for the second player's dice.
// Update the src attribute of the second dice image using setAttribute().
// Compare both random numbers using an if...else statement.
// Display "Player 1 Wins!" if the first player's number is greater.
// Display "Player 2 Wins!" if the second player's number is greater.
// Display "Draw!" if both players get the same number.
// Change the <h1> text dynamically using innerHTML to show the game result.
// Select HTML elements using document.querySelector().
// Select multiple image elements using document.querySelectorAll().
// Refresh the page to roll the dice again and observe the updated result.
// Bonus: Add a "Roll Dice" button that generates new dice values without refreshing the page.

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png"; //dice2.png
var randomImageSource1 = "images/" + randomImage1; //images/dice2.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png"; //dice2.png
var randomImageSource2 = "images/" + randomImage2; //images/dice2.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
