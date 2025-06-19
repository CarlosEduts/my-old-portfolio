const themeToggleButton = document.querySelector(".navbar__button-theme");
const themeIcon = document.querySelector(".navbar__icon-theme");
const rootElement = document.documentElement;

const DARK_CLASS = "dark";
const LIGHT_CLASS = "light";
const ICON_LIGHT = "ti-bulb";
const ICON_DARK = "ti-bulb-filled";

function toggleTheme() {
  const isDarkMode = rootElement.classList.contains(DARK_CLASS);

  rootElement.classList.toggle(DARK_CLASS, !isDarkMode);
  rootElement.classList.toggle(LIGHT_CLASS, isDarkMode);

  themeIcon.classList.toggle(ICON_LIGHT, !isDarkMode);
  themeIcon.classList.toggle(ICON_DARK, isDarkMode);
}
themeToggleButton?.addEventListener("click", toggleTheme);
