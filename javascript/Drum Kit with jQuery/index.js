// Mouse click
$(".drum").on("click", function () {
  var $button = $(this);
  var btnValue = $button.text();

  $button.addClass("pressed");
  setTimeout(function () {
    $button.removeClass("pressed");
  }, 100);

  keySound(btnValue);
});

// Keyboard press
$(document).on("keydown", function (event) {
  var key = event.key;
  var $button = $("." + key);

  if ($button.length) {
    $button.addClass("pressed");
    setTimeout(function () {
      $button.removeClass("pressed");
    }, 100);
  }

  keySound(key);
});

// Sound function
function keySound(key) {
  switch (key) {
    case "w":
      playSound("sounds/tom-1.mp3");
      break;
    case "a":
      playSound("sounds/tom-2.mp3");
      break;
    case "s":
      playSound("sounds/tom-3.mp3");
      break;
    case "d":
      playSound("sounds/tom-4.mp3");
      break;
    case "j":
      playSound("sounds/snare.mp3");
      break;
    case "k":
      playSound("sounds/kick-bass.mp3");
      break;
    case "l":
      playSound("sounds/crash.mp3");
      break;
    default:
      console.log(key);
      break;
  }
}

function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}
