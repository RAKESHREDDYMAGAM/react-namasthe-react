import React from "react";
import ReactDOM from "react-dom/client";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";


export const Header =()=>{
  const [isloginin,setlogin]=useState("login")
  return (
    <div className="flex">
            <div className="">
               <img className="w-56" src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
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