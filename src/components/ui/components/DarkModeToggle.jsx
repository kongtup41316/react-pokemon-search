import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function App() {
  // State to track whether dark mode is on or off (starts as false = light mode)
  const [darkMode, setDarkMode] = useState(false);

  // useEffect runs whenever darkMode changes
  useEffect(() => {
    const isDark = darkMode;
    if (isDark) {
      // Add 'dark' class to the <html> element when dark mode is on
      document.documentElement.classList.add("dark");
    } else {
      // Remove 'dark' class when dark mode is off
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]); // This array means "run this effect when darkMode changes"

  return (
    // Main container - changes background color based on darkMode state
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container mx-auto p-8">
        {/* Header section with title and toggle */}
        <div className="flex justify-between items-center mb-8">
          {/* Slider Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)} // Toggle darkMode between true/false
            className={`relative inline-flex items-center h-8 w-16 rounded-full transition-colors ${
              darkMode ? "bg-blue-600" : "bg-gray-300" // Background color of the slider track
            }`}
            aria-label="Toggle dark mode"
          >
            {/* The sliding circle that moves left/right */}
            <span
              className={`inline-flex items-center justify-center h-6 w-6 rounded-full bg-white shadow-lg transform transition-transform ${
                darkMode ? "translate-x-9" : "translate-x-1" // Move 9 units right when on, 1 unit when off
              }`}
            >
              {/* Icon inside the slider - shows moon when dark, sun when light */}
              {darkMode ? (
                <Moon size={14} className="text-blue-600" />
              ) : (
                <Sun size={14} className="text-yellow-500" />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
