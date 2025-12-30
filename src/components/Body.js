import {RestaurantCard} from "./Restaurant";
import RES_LIST from '../Utils/mockData'

export const Body = () => {
  let listOfRestaurant =[]
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{alert('buttonClicked')} }>Top Rated Restaurant</button>
      </div>
      <div className="resto-Container">
       {RES_LIST.SECTION_SEARCH_RESULT.map((restaurant) => (
        <RestaurantCard
          key={restaurant.info.resId}
          resData={restaurant}
        />
      ))}
      </div>
    </div>
  );
};