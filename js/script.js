const save = (k, v) => localStorage.setItem(k, JSON.stringify([...JSON.parse(localStorage.getItem(k) || "[]"), v]));

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target, isTask = f.id === "taskForm";
  const data = Object.fromEntries(new FormData(f));
  if (!isTask) data.file = f.file?.files[0]?.name || "";
  save(isTask ? "huntYourTimeTasks" : "huntYourTimeSubmissions", data);
  isTask ? (taskModal.close(), f.reset()) : (workSuccess.classList.remove("d-none"), workSubmit.disabled = true);
});

workModal.onclose = () => { workForm.reset(); workSuccess.classList.add("d-none"); workSubmit.disabled = false; };

soundToggle.onclick = () => {
  backgroundAudio.muted = false;
  soundToggle.textContent = backgroundAudio.paused ? (backgroundAudio.play(), "SOUND ON") : (backgroundAudio.pause(), "SOUND OFF");
};

VANTA.BIRDS({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  backgroundAlpha: 0,
  color1: 0xffd166,
  color2: 0x5c628e,
  birdSize: 1.2,
  quantity: 3
});

import("https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js").then(({ particlesCursor }) =>
  particlesCursor({
    el: document.getElementById("particles-bg"),
    gpgpuSize: 256,
    color: 0xffd166,
    colors: [0xffd166, 0x5c628e],
    pointSize: 3,
    sleepRadiusX: 150,
    sleepRadiusY: 150
  })
);
