import React from "react";
import ReactDOM from "react-dom/client";
import { useState ,useEffect} from "react";
import {RestoCard} from "./restocards";



export const Body = () => {
  const [listData1, setListData1] = useState([]);
  const [filteredListData1, setFilteredListData1] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  console.log("body");
  
  useEffect(() => {
      fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9805145&lng=77.7462403&collection=83649"
        );
        const json = await data.json();
        
        const cards = json?.data?.cards;

const restaurantCard = cards?.find(
  (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
);

const restaurants =
  restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        
        setListData1(restaurants);
        setFilteredListData1(restaurants);
        console.log(restaurants);
        
    };
    
    return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          value={searchtext}
          onChange={(e) => {setSearchtext(e.target.value)}}
          placeholder="Search restaurant"
        />

        <button
          onClick={() => {
            const filtered = listData1.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(searchtext.toLowerCase())
            );
            setFilteredListData1(filtered);
          }}
        >
          search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const filtered = (listData1 || []).filter((res) => res.info.avgRating > 4.5);
            setFilteredListData1(filtered);
            console.log(filtered);
          }}
        >
          Top Restaurants
        </button>
      </div>

      <div className="res-container">
        <RestoCard cards={filteredListData1} />
      </div>
    </div>
  );
};
