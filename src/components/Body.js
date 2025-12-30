import {RestaurantCard} from "./Restaurant";
import RES_LIST from '../Utils/mockData'

export const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-Container">
        <RestaurantCard  resData={RES_LIST} />
        {/* <RestaurantCard resName="Burger King" Cuisine="Italian, Burger, Coke" starRating="4 star" deleveryTime="20 minutes" /> */}
      </div>
    </div>
  );
};