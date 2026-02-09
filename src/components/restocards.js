import React from "react";
import ReactDOM from "react-dom/client";
import { useState ,useEffect} from "react";
import { shimmerCard } from "./shimmer-cards";
import { Body } from "./Body";

export const RestoCard = ({ cards }) => {
  console.log(cards);
  console.log("reddy")
  if (!cards || cards.length === 0) return shimmerCard();

  return (
    <>
      {cards.map((res) => (
        <div className="rescard" key={res.info.id}>
          <img
            className="reslogo"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +res.info.cloudinaryImageId
            }
          />
          <h3>{res.info.name}</h3>
          <h3>{res.info.cuisines.join(", ")}</h3>
          <h3>Ratings{res.info.avgRating}</h3>
          <h3>{res.info.costForTwo}</h3>
          <h3>{res.info.sla.slaString} </h3>
        </div>
      ))}
    </>
  );
};
