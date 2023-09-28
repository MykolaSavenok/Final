import React from "react";
import Menu from './Menu.jsx'
import './header.scss'


const Header = () => {
   return (
      <header className="header">
         <div className="header__container">
            <Menu />
         </div>
      </header>
   );
}

export default Header;