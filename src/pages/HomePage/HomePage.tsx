import heartIcon from "../../assets/heart-icon.svg";
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme'
import Nav from "../../components/Nav/Nav";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Work from "../../components/Work/Work";
import Projects from "../../components/Projects/Projects";
import { useState, useEffect } from "react";

function HomePage() {
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
    console.log(localStorageTheme);
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
    <main>
      <Home />
      <About />
      <Work />
      <Projects />
      <Contact />
    </main>
    <footer>
      <div className="footer-txt-wrapper">
        <p>Made with</p>
        <img src={heartIcon} alt="heart icon" />
        <p>by Isaac James</p>
      </div>
      <div className="footer-icons-link-wrapper">
        <p>All icons by</p>
        <a href="https://icons8.com/">Icons8</a>
      </div>
      
    </footer>
    </>
  )
}

export default HomePage;