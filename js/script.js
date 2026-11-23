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
