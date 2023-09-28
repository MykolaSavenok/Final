import React from "react";
import { NavLink } from 'react-router-dom';

const Menu = () => {
   return (
      <div className="header__menu">
         <div className="header__logo"><img src="/static/image/smuzi_logo.png" alt="" /></div>
         <ul className="header__list">
            <NavLink to={"/"} activeClassName="active"><li>Головна</li></NavLink>
            <NavLink to={"/smoothie"} activeClassName="active"><li>Смузі конструктор</li></NavLink>
            <NavLink to={"/aboutUs"} activeClassName="active"><li>Про нас</li></NavLink>
         </ul>
         <NavLink to={"/basket"}><div className="header__basket"><img src='/static/image/basket.svg' alt="basket" /><span>99</span></div></NavLink>
      </div>
   );
}

export default Menu;