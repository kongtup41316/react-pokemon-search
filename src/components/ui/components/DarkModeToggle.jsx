import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
      className="
        relative
        w-14 h-8
        rounded-full
        bg-gray-300 dark:bg-gray-600
        transition-colors duration-300
        flex items-center
      "
    >
      {/* Slider knob */}
      <span
        className={`
          absolute
          left-1
          w-6 h-6
          rounded-full
          bg-white
          shadow-md
          flex items-center justify-center
          transition-all duration-300
          ${darkMode ? "translate-x-6" : "translate-x-0"}
        `}
      >
        {darkMode ? (
          <Moon size={14} className="text-gray-800" />
        ) : (
          <Sun size={14} className="text-yellow-500" />
        )}
      </span>
    </button>
  );
}
