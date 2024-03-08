import React from "react";
import "../explore section/exploresection.css";
import { restaurants } from "../../../data/restaurant";
import Explorecard from "./explorecard";

const Exploresection = ({ list, collectionname }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionname}</div>
      <div className="explore-grid">
        {list.map((restaurant) => {
          return <Explorecard restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Exploresection;
