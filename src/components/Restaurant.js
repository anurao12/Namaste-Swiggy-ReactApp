import { RESTRO_URL } from "../Utils/constant";
export const RestaurantCard = ({ resData }) => {
  const { name, cuisine, rating, cft, image } = resData.info;
  const { deliveryTime } = resData.order;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt={name}
        className="res-logo"
        height="144"
        loading="lazy"
        width="156"
        src={RESTRO_URL}
      />
      <h3>{name}</h3>
      <h5>{cuisine.map((c) => c.name).join(", ")}</h5>
      <h5>⭐ {rating.rating_text}</h5>
      <h5>{cft.text}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};
