import "./toggleTheme.scss";
import SunIcon from "../../assets/sun.svg";
import MoonIcon from "../../assets/moon.png"
import { useEffect, useState } from "react";


const ToggleTheme = () => {
  const [theme, setTheme] = useState("");

  const getThemeAsString = (localStorageTheme: string | null , systemSettingDark: MediaQueryList): string => {
    // check if user has theme preference stored
    if (localStorageTheme) {
      return localStorageTheme;
    }
    // else false back onto system setting
    if (systemSettingDark.matches) {
      return "dark";
    }

    return "light";
  }

  const swapTheme = (): void => {
    const newTheme: string = theme === "dark" ? "light": "dark";
    
    setTheme(newTheme);
  }

  useEffect(function onPageLoad() {
    // set initial theme
    const localStorageTheme: string | null = localStorage.getItem("theme");
    const systemSettingDark: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
  
    const themeString: string = getThemeAsString(localStorageTheme, systemSettingDark);
    setTheme(themeString);
  }, [])

  useEffect(function onThemeChange() {
    if (theme !== null) {
      localStorage.setItem("theme", theme);
      document.querySelector("html")?.setAttribute("data-theme", theme);
    }
  }, [theme])

  if (theme !== "") return (
      <button className="theme-btn" onClick={swapTheme}>
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

export default ToggleTheme