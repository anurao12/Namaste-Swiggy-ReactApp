import {RESTRO_URL}  from '../Utils/constant'
export const RestaurantCard = (props) => {
    const {resData} = props
    return(
  <div className="res-card" style={{backgroundColor: '#f0f0f0'}}>
    <img alt="Veg Biryani" className="res-logo" height="144" loading="lazy" width="156" src={RESTRO_URL}/>
    <h3>{resData.info.name}</h3>
    <h5>{resData.info.cuisine.map((x) => x.name)
    .join(", ")}</h5>
    <h5>{resData.info.rating.rating_text}</h5>
    <h5>{resData.info.cft.text}</h5>
    <h5>{resData.order.deliveryTime} Minutes</h5>
  </div>
    )
};