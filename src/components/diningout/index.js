import React from "react";
import "./dining.css";
import Collection from "../common/collection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { diningOut } from "../../data/diningOut";
import Filters from "../common/filters";
import Exploresection from "../common/explore section";
import { restaurants } from "../../data/restaurant";

const collectionList = [
  {
    id: "1",
    title: "trending this week",
    cover:
      "https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1705557723.png",
    places: "12 places",
  },
  {
    id: "2",
    title: "One of a kind places",
    cover:
      "https://b.zmtcdn.com/data/collections/f25923193488d2884f8689f185d418ef_1705558811.png",
    places: "12 places",
  },
  {
    id: "3",
    title: "lets Brunch",
    cover:
      "https://b.zmtcdn.com/data/collections/fdcf90c9aadc2e4eed25bc5486653989_1709187376.png",
    places: "12 places",
  },
  {
    id: "4",
    title: "Trending Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247359.jpg",
    places: "12 places",
  },
  {
    id: "5",
    title: "Dine for the gram",
    cover:
      "https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1705558245.png",
    places: "12 places",
  },
  {
    id: "6",
    title: "The Must go List",
    cover:
      "https://b.zmtcdn.com/data/collections/1322e8a1ff6ae914cd70bc8ec849d20d_1705558664.png",
    places: "12 places",
  },
  {
    id: "7",
    title: "Serene Rooftop Places",
    cover:
      "https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg",
    places: "12 places",
  },
  {
    id: "8",
    title: "Cafe Catchups",
    cover:
      "https://b.zmtcdn.com/data/collections/92bf1f87ad0a90b94007e79b13eb592c_1705558517.png",
    places: "12 places",
  },
];

const diningfilters = [
  {
    id: 1,
    icon: (
      <i className="">
        <FontAwesomeIcon icon={faFilter} />
      </i>
    ),
    title: "Filters",
  },
  {
    id: 2,
    title: "Ratings: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const diningList = restaurants
const Diningout = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterlist={diningfilters} />
        <Exploresection list={diningList} collectionname="Dine-out Restaurants in Lucknow"/>
      </div>
    </div>
  );
};

export default Diningout;
