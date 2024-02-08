import React, { useState, useEffect } from "react";
import "./Footer.css";

export default function Footer() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.getElementById("themeToggle").textContent =
        "Use app in Dark Mode";
    } else {
      setTheme("dark");
      document.getElementById("themeToggle").textContent =
        "Use app in Light Mode";
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <footer className="containerFooter">
      <h3 className="footerText">Made with ❤️ by TommyBspeed</h3>
      <button id="themeToggle" onClick={toggleTheme}>
        Use App in Light mode
      </button>
    </footer>
  );
}
