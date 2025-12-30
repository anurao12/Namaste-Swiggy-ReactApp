import {RestaurantCard} from "./Restaurant";
import RES_LIST from '../Utils/mockData'
import { useState } from "react";

//when ever state changes react will re-renders the component
export const Body = () => {
  const [listOfRestaurant, setListofRestaurant] = useState(RES_LIST.SECTION_SEARCH_RESULT);
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.rating.rating_text > 4
            );
            setListofRestaurant(filteredList);
            //console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resto-Container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};