import React from "react";
import ReactDOM from "react-dom/client";
import { useState ,useEffect} from "react";


export const Header =()=>{
  const [isloginin,setlogin]=useState("login")
  return (
    <div className="header">
            <div className="logo-container">
               <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                      isloginin=="login" ? setlogin("logout"):setlogin("login");
                    }}>{isloginin}</button>
                </ul>

            </div>
        </div>
    )
  };

  export default Header;