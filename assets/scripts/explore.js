// explore.js

window.addEventListener('DOMContentLoaded', init);

var synth = window.speechSynthesis;

function populateVoiceList() {
  var voiceSelect = document.querySelector('select');
  var voices = [];
  voices = synth.getVoices();

  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function speakPlease() {
  var inputTxt = document.getElementsByTagName("textarea");
  var utterThis = new SpeechSynthesisUtterance(inputTxt[0].value);
  var faceImage = document.querySelectorAll('img')[0];

  faceImage.setAttribute("src", "assets/images/smiling-open.png");
  synth.speak(utterThis);

  utterThis.addEventListener('end', changePic);
}

function changePic() {
  var faceImage = document.querySelectorAll('img')[0];
  faceImage.setAttribute("src", "assets/images/smiling.png");
}

function init() {
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  var talkButton = document.getElementsByTagName("button");
  talkButton[0].addEventListener('click', speakPlease);
}