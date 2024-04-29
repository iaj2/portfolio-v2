import './app.scss'
import ToggleTheme from './components/ToggleTheme/ToggleTheme'
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";


function App() {
  // site theme 
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

  useEffect(function onPageLoad() {
    // set initial theme
    const localStorageTheme: string | null = localStorage.getItem("theme");
    const systemSettingDark: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
  
    const themeString: string = getThemeAsString(localStorageTheme, systemSettingDark);
    setTheme(themeString);
  }, [])

  return (
    <>
    <header>
      <ToggleTheme theme={theme} setTheme={setTheme}/>
      <Nav />
    </header>

    <main></main>
    <footer></footer>
    </>
  )
}

export default App;
