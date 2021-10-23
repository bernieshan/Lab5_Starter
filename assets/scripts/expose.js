// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function changeHorn(event) {
  var image = document.querySelectorAll('img');
  var sound = document.getElementsByClassName("hidden");
  if (event.target.value == "party-horn") {
    image[0].setAttribute("src", "assets/images/party-horn.svg");
    image[0].setAttribute("alt", "Party horn selected");
    sound[0].setAttribute("src", "assets/audio/party-horn.mp3");
  }
  else if (event.target.value == "air-horn") {
    image[0].setAttribute("src", "assets/images/air-horn.svg");
    image[0].setAttribute("alt", "Air horn selected");
    sound[0].setAttribute("src", "assets/audio/air-horn.mp3");
  }
  else {
    image[0].setAttribute("src", "assets/images/car-horn.svg");
    image[0].setAttribute("alt", "Car horn selected");
    sound[0].setAttribute("src", "assets/audio/car-horn.mp3");
  }
}

function volumeChanger() {
  var currentVolume = document.getElementById("volume");
  var volumeImage = document.querySelectorAll('img');
  if (currentVolume.value == 0) {
    volumeImage[1].setAttribute("src", "assets/icons/volume-level-0.svg");
  }

  if (currentVolume.value > 0 && currentVolume.value < 33) {
    volumeImage[1].setAttribute("src", "assets/icons/volume-level-1.svg");
  }

  if (currentVolume.value >= 33 && currentVolume.value < 67) {
    volumeImage[1].setAttribute("src", "assets/icons/volume-level-2.svg");
  }

  if (currentVolume.value >= 67) {
    volumeImage[1].setAttribute("src", "assets/icons/volume-level-3.svg");
  }
}

function playSound() {
  var currentVolume = document.getElementById("volume");
  var audio = document.getElementsByClassName("hidden");
  var selectHorn = document.getElementById("horn-select");
  audio[0].volume = (currentVolume.value/100);
  audio[0].play();

  if (selectHorn.value == "party-horn") {
    jsConfetti.addConfetti();
  }
}

function init() {
  var selectHorn = document.getElementById("horn-select");
  selectHorn.addEventListener('change', changeHorn);

  var changeVolume = document.getElementById("volume-controls");
  changeVolume.addEventListener('change', volumeChanger);

  var soundButton = document.getElementsByTagName("button");
  soundButton[0].addEventListener('click', playSound);
}