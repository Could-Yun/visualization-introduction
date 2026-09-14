const THEME_KEY = "layout-lab-theme";
const PROGRESS_KEY = "layout-lab-progress-v2";

function applyTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = saved || (prefersDark ? "dark" : "light");
}

function bindTheme() {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;
  const refresh = () => {
    const dark = document.documentElement.dataset.theme === "dark";
    button.setAttribute("aria-label", dark ? "切换到浅色主题" : "切换到深色主题");
    button.querySelector("span").textContent = dark ? "☀" : "◐";
  };
  refresh();
  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
    refresh();
  });
}

function refreshContinue() {
  let completed = [];
  try { completed = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "[]"); } catch { completed = []; }
  const steps = ["planning", "structure", "grid", "modules", "responsive", "review"];
  const next = steps.find((step) => !completed.includes(step));
  const link = document.querySelector("[data-continue-link]");
  const label = document.querySelector("[data-continue-label]");
  if (!link || !label || !completed.length) return;
  link.href = next ? "./lesson-01/#" + next : "./lesson-01/#review";
  label.textContent = next ? "继续第一章 · " + completed.length + "/6" : "重新浏览第一章";
}

applyTheme();
bindTheme();
refreshContinue();
