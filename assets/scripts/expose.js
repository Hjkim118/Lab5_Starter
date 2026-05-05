// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const img = document.querySelector("#expose img");
  const audio = document.querySelector("audio");
  const playBtn = document.querySelector("button");
  const volInput = document.getElementById("volume");
  const volImg = document.querySelector("#volume-controls img");
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener("change", () => {
    img.src = `assets/images/${hornSelect.value}.svg`;
    audio.src = `assets/audio/${hornSelect.value}.mp3`;
  });

  volInput.addEventListener("input", () => {
    const vol = volInput.value;
    audio.volume = vol / 100;

    if (vol == 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
    } else if (vol < 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
    } else if (vol < 67) {
      volImg.src = "assets/icons/volume-level-2.svg";
    } else {
      volImg.src = "assets/icons/volume-level-3.svg";
    }
  });

  playBtn.addEventListener("click", () => {
    audio.play();
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}
