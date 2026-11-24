const save = (k, v) => localStorage.setItem(k, JSON.stringify([...JSON.parse(localStorage.getItem(k) || "[]"), v]));

document.addEventListener("submit", (e) => {
  e.preventDefault();
  let f = e.target, isTask = f.id === "taskForm";
  let d = Object.fromEntries(new FormData(f));
  if (!isTask) d.file = f.file?.files[0]?.name || "";
  save(isTask ? "tasks" : "submissions", d);
  isTask ? (taskModal.close(), f.reset()) : (workSuccess.classList.remove("d-none"), workSubmit.disabled = true);
});

workModal.onclose = () => { workForm.reset(); workSuccess.classList.add("d-none"); workSubmit.disabled = false; };

soundBtn.onclick = () => {
  bgAudio.muted = false;
  soundBtn.textContent = bgAudio.paused ? (bgAudio.play(), "SOUND ON") : (bgAudio.pause(), "SOUND OFF");
};
