import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import {Header} from "./src/components/Header";
import {Body} from "./src/components/Body";
import "./index.css";
import {About} from "./src/components/About";
import { Outlet } from "react-router-dom";




export const Applayout = () =>{ 
  return(
    <div className="applayout">
            <Header/>
            <Outlet/>
        </div>
    );
  };

 const WenntWrong =()=>{
  return (
    <div>
        <h2>404 not found</h2>
        <h1>0ops something went wrong </h1>
    </div>
  );
 };
 const router = createBrowserRouter([
      
      {
        path:"/",
        element:<Applayout/>,
        children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/About",
          element:<About/>
        },
        {
          path:"/Contact",
          element:<h1>Contact us</h1>
        }
      ],
      errorElement:<WenntWrong/>
      }
  
  ]);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);