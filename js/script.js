document.onsubmit = (e) => {
  e.preventDefault();
  if (e.target.id === "taskForm") {
    taskModal.close();
    e.target.reset();
  } else {
    workSuccess.classList.remove("d-none");
    workSubmit.disabled = true;
  }
};

workModal.onclose = () => {
  workForm.reset();
  workSuccess.classList.add("d-none");
  workSubmit.disabled = false;
};

soundToggle.onclick = () => {
  backgroundAudio.muted = false;
  const play = backgroundAudio.paused;
  play ? backgroundAudio.play() : backgroundAudio.pause();
  soundToggle.textContent = play ? "SOUND ON" : "SOUND OFF";
};

VANTA.BIRDS({
  el: "#vanta-bg",
  backgroundAlpha: 0,
  color1: 0xffd166,
  color2: 0x5c628e
});

import("https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js")
  .then(({ particlesCursor }) => {
    particlesCursor({
      el: document.getElementById("particles-bg"),
      pointSize: 3,
      colors: [0xffd166, 0x5c628e]
    });
  });
