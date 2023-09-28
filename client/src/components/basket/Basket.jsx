import React from "react";
import { Link } from "react-router-dom";
import './basket.scss'


const Basket = () => {
   return(
      <div className="basket">
         <div className="basket__container">
            <p>Ще нічого не додано</p>
            <Link to="/smoothie" className="basket__btn">Хочу смузі!</Link>
         </div>
      </div>
   );
};


export default Basket;