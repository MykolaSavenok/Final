import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './style.scss';
import App from "./App.jsx";
import AboutUs from "./components/aboutUs/AboutUs.jsx"
import Basket from './components/basket/Basket.jsx';
import Main from './components/main/Main.jsx';
import SmoothieConstructor from './components/constructor/SmoothieConstructor.jsx';


const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

const router = createBrowserRouter(
   [
      {
         path: '/',
         element: <App />,
         children: [
            {
               path: '/',
               element: <Main />
            },
            {
               path: '/aboutUs',
               element: <AboutUs />,
            },
            {
               path: '/basket',
               element: <Basket />
            },
            {
               path: '/smoothie',
               element: <SmoothieConstructor />
            }
         ]
      },
   ]);


root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
