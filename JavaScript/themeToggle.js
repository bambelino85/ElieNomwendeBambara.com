const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement;

// Apply theme
function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (themeBtn) {
    themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

// Initialize theme
(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) {
    setTheme(saved);
    return;
  }

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  setTheme(prefersDark ? "dark" : "light");
})();

// Toggle theme on click
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    setTheme(current === "dark" ? "light" : "dark");
  });
}
