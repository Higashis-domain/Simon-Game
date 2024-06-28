// all var

var colorDivs = ["green", "red", "yellow", "blue"];
var gamePartten = [];
var playerData = [];
var level = 0;
var state = false;

// actual running code

$(document).keydown(function(event) {

  if (event.key === ' ' || event.key === 'spacebar') {
    if (!state) {
      $("#h1-styles").css("font-size", "3rem");
      $("#h1-styles").text("Level: " + level);
      nextGameMove();
      state = true;
    }
  }

});

$(".item").click(function() {

    var userClickedDiv = $(this).attr("id");
    playerData.push(userClickedDiv);
    AnimateAndSonundBtn(userClickedDiv);
    gameLogic(playerData.length - 1);

});

$(document).keydown(function(event) {

  switch (event.key) {

    case "d":
    playerData.push("green");
    AnimateAndSonundBtn("green");
    gameLogic(playerData.length - 1);
      break;

    case "f":
    playerData.push("red");
    AnimateAndSonundBtn("red");
    gameLogic(playerData.length - 1);
      break;

    case "j":
    playerData.push("yellow");
    AnimateAndSonundBtn("yellow");
    gameLogic(playerData.length - 1);
      break;

    case "k":
    playerData.push("blue");
    AnimateAndSonundBtn("blue");
    gameLogic(playerData.length - 1);
      break;

    default:

  }

});

// All functions used in this program


function nextGameMove() {

  playerData = [];
  level++;
  $("#h1-styles").text("Level: " + level);
  var randomNum = Math.floor(Math.random() * 4);
  var randomColor = colorDivs[randomNum];
  gamePartten.push(randomColor);
  AnimateAndSonundBtn(randomColor);

}

function AnimateAndSonundBtn(inputColor) {

    $("#" + inputColor).addClass("pressed");
    var divSound = new Audio("./sounds/" + inputColor + ".mp3");
    divSound.play();
    setTimeout(function() {
        $("#" + inputColor).removeClass("pressed");
    }, 100);

}

function gameLogic(actualLevel) {

  if (gamePartten[actualLevel] === playerData[actualLevel]) {

    if (gamePartten.length === playerData.length) {

      setTimeout(function() {
        nextGameMove();
      }, 1000);

    }

  } else {

    $("body").addClass("end-screen");
    $("#h1-styles").text("Game Over, to restart press SPACE.");
    $("#h1-styles").css("font-size", "2rem");
    var worng = new Audio("./sounds/wrong.mp3");
    worng.play();
    setTimeout(function () {
      $("body").removeClass("end-screen");
    }, 200);
    gamePartten = [];
    state = false;
    level = 0;

  }

}
