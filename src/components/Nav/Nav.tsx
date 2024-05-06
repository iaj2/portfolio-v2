import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useEffect, useState } from "react";

const Nav = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [currentSectionID, setCurrentSectionID] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(function onPageLoad() {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionId = section.id;
        const sectionEl = document.getElementById(sectionId);
        const navHeight = document.getElementById("nav")?.offsetHeight;
        if(sectionEl && window.scrollY >= sectionEl.offsetTop - (navHeight ? navHeight: 6*16)) {
          setCurrentSectionID(sectionId);
        }

        if(sectionId === "contact" &&
          sectionEl && window.scrollY >= sectionEl?.offsetTop - 2*sectionEl?.offsetHeight){
            setCurrentSectionID(sectionId);
          }
      })
    })},[])

  const handleNavClick = (): void => {
    setOpenMobileNav(false) // For mobile
  }

  return (
    <nav id="nav" className="navbar">
      {/* Mobile Only Menu */}
      <HamburgerMenu openMobileNav={openMobileNav} setOpenMobileNav={setOpenMobileNav}/>

      {/* Desktop & Mobile Nav Items */}
      <ul className={`nav-items ${openMobileNav ? "open" : "close"}`}>
      {navItems.map((item) => (
        item.id && item.label ?
        <li key={item.id} className="nav-item">
          <a 
            id={`nav-anchor-${item.id}`}
            href={`#${item.id}`}
            className={`nav-link ${item.id === currentSectionID ? "active" : ""}`}
            onClick={()=>handleNavClick()}>{item.label}
          </a>
        </li>
        :
        <></>
      ))}
    </ul>
    </nav>
  )
}

export default Nav