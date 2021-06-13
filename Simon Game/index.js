var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

$(".btn").on("click",function(){
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  var audio = new Audio("sounds/" + this.id + ".mp3");
  audio.play();

  animatePress(userChosenColour);
  console.log(userClickedPattern);

});


function animatePress(currentColour) {

$("#"+currentColour).addClass("pressed");

setTimeout(function(){
  $("#"+currentColour).removeClass("pressed");
},100);

}
