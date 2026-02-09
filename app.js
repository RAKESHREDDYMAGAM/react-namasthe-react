import React from "react";
import ReactDOM from "react-dom/client";
import { useState ,useEffect} from "react";

import {Header} from "./src/components/Header";
import {Body} from "./src/components/Body";
import "./index.css";
import { shimmerCard } from "./src/components/shimmer-cards";
// import { restoCard } from "./src/components/restocards";//

const Applayout = () =>{ 
    return(
        <div className="applayout">
            <Header/>
            <Body/>
        </div>
    )
}
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);