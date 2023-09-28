import React from "react";
import Header from "./components/header/header.jsx";
import './app.scss';
import { Outlet } from "react-router-dom";



const App = () => {
   return (
      <div className="wrapper">
         <Header />
         <div className="wrapper__container">
            <Outlet />
         </div>
      </div>
   );
};

export default App;