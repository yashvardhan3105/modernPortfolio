import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme) {
      root.classList.add("white_theme");
      root.classList.remove("black_theme");
    } else {
      root.classList.add("black_theme");
      root.classList.remove("white_theme");
    }
  }, [theme]);

  return (
    <div>
      <Navbar />
      <div className="navbar_button">
        <button onClick={() => setTheme(!theme)}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill={theme ? "black" : "white"}
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <Main theme={theme} />
      <Footer />
    </div>
  );
}
