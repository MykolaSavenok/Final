import React from "react";
import './aboutUs.scss'

const AboutUs = () => {
   return (
      <section className="about-us">
         <div className="about-us__container">
            <div className="about-us__row">
               <p className="about-us__text">Найкращий смузі бар на планеті земля. <br />Якщо смузі, то тільки ми.</p>
               <div className="about-us__image"><img src="/static/image/aboutUs/smuzi.jpg" alt="smuzi" /></div>
            </div>
            <h2 className="contacts__header">Контакти</h2>
            <p className="contacts__text">Вітаємо! Ви зробили правильний вибір, інакше й не могло бути. Ми вгадуємо ваші бажання та робимо ваше свято особливим. Саме час зателефонувати, представитися та розповісти чому ми так довго не могли знайти один одного.</p>
            <address className="contacts__number">
               <p>М.Київ</p>
               <p>вул.Хрещатик 1</p>
               <div>
                  <a href="tel:+380677777777">Teл: +380677777777</a>
                  <a href="tel:+380670000000">Teл: +380670000000</a>
               </div>
            </address>
         </div>
      </section >
   );
};


export default AboutUs;