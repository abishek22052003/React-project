import React from "react";
import "../delivery/delivery.css";
import Filters from "../common/filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import Deliverycollections from "./deliverycollection";
import Topbrands from "./top brands";
import Exploresection from "../common/explore section";
import { restaurants } from "../../data/restaurant";

const deliveryfilters = [
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

const restaurantlist = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterlist={deliveryfilters} />
      </div>
      <Deliverycollections />
      <Topbrands />
      <Exploresection
        list={restaurantlist}
        collectionname="Delivery Restaurants in Bangalore"
      />
    </div>
  );
};

export default Delivery;
