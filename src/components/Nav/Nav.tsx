import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useState } from "react";

const Nav = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <nav className="navbar">
      {/* Mobile Only Menu */}
      <HamburgerMenu openMobileNav={openMobileNav} setOpenMobileNav={setOpenMobileNav}/>

      {/* Desktop & Mobile Nav Items */}
      <ul className={`nav-items ${openMobileNav ? "open" : "close"}`}>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Work</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav