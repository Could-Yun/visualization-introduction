import { HOME_COPY, applyStaticCopy, getLanguage, setLanguage } from './i18n.js';
const THEME_KEY = "layout-lab-theme";
const PROGRESS_KEY = "layout-lab-progress-v2";
let language = getLanguage();

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
    button.setAttribute("aria-label", dark ? HOME_COPY[language].themeLight : HOME_COPY[language].themeDark);
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
  if (!link || !label) return;
  link.href = next && completed.length ? "./lesson-01/#" + next : "./lesson-01/";
  label.textContent = completed.length ? (next ? HOME_COPY[language].continue(completed.length) : HOME_COPY[language].revisit) : HOME_COPY[language].chapterEnter;
}

applyTheme();
applyStaticCopy(HOME_COPY, language);
bindTheme();
refreshContinue();
document.querySelector('[data-language-toggle]')?.addEventListener('click', () => {
  language = setLanguage(language === 'zh' ? 'en' : 'zh');
  applyStaticCopy(HOME_COPY, language);
  bindThemeLabel();
  refreshContinue();
});

function bindThemeLabel() {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.querySelector('[data-theme-toggle]')?.setAttribute('aria-label', dark ? HOME_COPY[language].themeLight : HOME_COPY[language].themeDark);
}
