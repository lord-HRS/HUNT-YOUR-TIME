const save = (k, v) => localStorage.setItem(k, JSON.stringify([...JSON.parse(localStorage.getItem(k) || "[]"), v]));

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target, isTask = f.id === "taskForm";
  const data = Object.fromEntries(new FormData(f));
  if (!isTask) data.file = f.file?.files[0]?.name || "";
  save(isTask ? "huntYourTimeTasks" : "huntYourTimeSubmissions", data);
  isTask ? (taskModal.close(), f.reset()) : (workSuccess.classList.remove("d-none"), workSubmit.disabled = true);
});

