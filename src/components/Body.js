import { RestaurantCard } from "./Restaurant";
import RES_LIST from "../Utils/mockData";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

//when ever state changes react will re-renders the component
export const Body = () => {
  const [listOfRestaurant, setListofRestaurant] = useState(
    RES_LIST.SECTION_SEARCH_RESULT
  );
  const [showCards, setShowCards] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // for fetching api not working becz of CORS issue

  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async function getRestaurants() {
  //   try {
  //     const response = await fetch(
  //       "https://namastedev.com/api/v1/listRestaurants"
  //     );
  //     const data = await response.json();
  //     return data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  //     //console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching restaurants:", error);
  //   }
  // };

  useEffect(() => {
    // simulate API delay
    setTimeout(() => {
      setListofRestaurant(RES_LIST.SECTION_SEARCH_RESULT);
      setFilteredRestaurant(RES_LIST.SECTION_SEARCH_RESULT);
      setShowCards(true);
    }, 1500);
  }, []);

  return !showCards ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* firstly we need to tie out inputbox to local variable with default values then when we change the value 
        we need to update with onchange handler with setstate */}
        <div className="search-bar">
          <input
            type="search"
            className="search-box"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            className="search-btn"
            onClick={() => {
              //console.log(searchText);
              const filteredRes = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>

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
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
