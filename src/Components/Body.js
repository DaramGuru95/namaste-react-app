import RestaurantCard from "./RestaurantCard";
import restaurantCards from "../utils/mockData";
import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantCards);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  console.log(setSearchValue);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    const cardData = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=13.0684934&lng=77.5977843"
    );
    const json = await cardData.json();
    console.log(json);
    // setListOfRestaurant(
    //   json?.data?.success?.cards[1]?.card?.card?.gridlEments?.infoWithStyle
    //     ?.restaurants
    // );
  };

  // if (listOfRestaurant === 0) {
  //   return <Shimmer />;
  // }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchValue}
            className="search-box"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.includes(searchValue)
              );
              setListOfRestaurant(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="rated-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (filterRes) => filterRes?.info?.avgRating > 4.5
            );
            console.log(filteredList);
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
