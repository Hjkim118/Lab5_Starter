// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const talkBtn = document.querySelector("button");
  const textArea = document.getElementById("text-to-speak");
  const faceImg = document.querySelector("#explore img");
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkBtn.addEventListener("click", () => {
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.addEventListener("start", () => {
      faceImg.src = "assets/images/smiling-open.png";
    });

    utterThis.addEventListener("end", () => {
      faceImg.src = "assets/images/smiling.png";
    });

    synth.speak(utterThis);
  });
}
