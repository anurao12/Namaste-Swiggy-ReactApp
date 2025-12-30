import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/**
 * Header
 *    - logo
 *    - nav items
 * Body
 *    - search
 *    - RestaurantContainer
 *      - restaurantCard
 *          - img
 *          - Name of Res, star rating, Cuisine, delevery time
 * Footer
 *     - copyright
 *     - links
 *     - Address
 *     - Contact
 */

const resObj = {
                "type": "restaurant",
                "info": {
                    "resId": 52924,
                    "name": "Pizza Hut",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/52924\/8992b8a83811fd4bed7dd97d1aec5f04_o2_featured_v2.jpg"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/52924\/8992b8a83811fd4bed7dd97d1aec5f04_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.8",
                        "rating_text": "3.8",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "8,047",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "3.4",
                                "reviewCount": "294",
                                "reviewTextSmall": "294 Reviews",
                                "subtext": "294 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "3.4",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "yellow",
                                    "tint": "400"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.1",
                                "reviewCount": "7,753",
                                "reviewTextSmall": "7,753 Reviews",
                                "subtext": "7,753 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.1",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9300 for two"
                    },
                    "cfo": {
                        "text": "\u20b9150 for one"
                    },
                    "locality": {
                        "name": "Shanti Nagar, Bangalore",
                        "address": "4\/1, O Shaugnessy Road, Shanti Nagar, Bangalore",
                        "localityUrl": "bangalore\/shanti-nagar-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pasta\/",
                            "name": "Pasta"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9150 for one"
                    }
                },
                "order": {
                    "deliveryTime": "52 min",
                    "isServiceable": true,
                    "hasOnlineOrdering": true,
                    "actionInfo": {
                        "text": "Order Now",
                        "clickUrl": "\/bangalore\/pizza-hut-shanti-nagar\/order"
                    }
                },
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/pizza-hut-shanti-nagar\/order",
                    "clickActionDeeplink": ""
                },
                "distance": "1.2 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"6a250e1b-a337-41f8-b66e-ae11ba68c5a8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"52924\",\"element_type\":\"listing\",\"rank\":1}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": true,
                "bulkOffers": [
                    {
                        "text": "Flat 20% OFF",
                        "color": {
                            "tint": "500",
                            "type": "blue"
                        }
                    }
                ],
                "isDisabled": false,
                "bottomContainers": []
            }


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xseGCh1McOhf83EKqr7L9tfzFXKE3cEHLA&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
    const {resData} = props
    return(
  <div className="res-card" style={{backgroundColor: '#f0f0f0'}}>
    <img alt="Veg Biryani" className="res-logo" height="144" loading="lazy" width="156" src="https:\/\/b.zmtcdn.com\/data\/pictures\/4\/52924\/8992b8a83811fd4bed7dd97d1aec5f04_o2_featured_v2.jpg"/>
    <h3>{resData.info.name}</h3>
    <h5>{resData.info.cuisine.map((x) => x.name)
    .join(", ")}</h5>
    <h5>{resData.info.rating.rating_text}</h5>
    <h5>{resData.info.cft.text}</h5>
    <h5>{resData.order.deliveryTime} Minutes</h5>
  </div>
    )
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-Container">
        <RestaurantCard  resData={resObj} />
        {/* <RestaurantCard resName="Burger King" Cuisine="Italian, Burger, Coke" starRating="4 star" deleveryTime="20 minutes" /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
