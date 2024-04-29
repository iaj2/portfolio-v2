import "./toggleTheme.scss";
import SunIcon from "../../assets/sun.svg";
import MoonIcon from "../../assets/moon.png"
import React, { useEffect } from "react";

interface Props {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ToggleTheme = ({ theme, setTheme }: Props)  => {

  const swapTheme = (): void => {
    const newTheme: string = theme === "dark" ? "light": "dark";
    
    setTheme(newTheme);
  }

  useEffect(function onThemeChange() {
    if (theme !== null) {
      localStorage.setItem("theme", theme);
      document.querySelector("html")?.setAttribute("data-theme", theme);
    }
  }, [theme])

  if (theme) return (
      <button className="header-btn theme-btn" onClick={swapTheme}>
        {/* light theme */}
        {theme === "light" && 
          <img src={SunIcon} alt="sun icon" className="sun-icon"/>
        }
        {/* dark theme */}
        {theme === "dark" && 
          <img src={MoonIcon} alt="moon icon" className="moon-icon"/>
        }
        
      </button>
    )
  else return <></>
}

export default ToggleTheme;