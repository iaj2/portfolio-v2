import './hamburgerMenu.scss';

interface Props {
  openMobileNav: boolean;
  setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>
  ;
}

const HamburgerMenu = ({ openMobileNav, setOpenMobileNav }: Props) => {
  
  const toggleMobileNav = () : void  => {
    
    setOpenMobileNav((openMobileNav) => !openMobileNav);
  }
  
  return (
    <button 
      className={`header-btn menu-btn ${openMobileNav ? "open": ""}`}
      onClick={toggleMobileNav}
    >
      {/* Hamburger Menu Lines */}
      <span></span>
      <span></span>
      <span></span>
  </button>
  )
}

export default HamburgerMenu;