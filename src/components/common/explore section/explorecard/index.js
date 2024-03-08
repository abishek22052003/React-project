import React from "react";
import "../explorecard/explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Explorecard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? "";
  const coverimg = restaurant?.info?.image?.url;
  const deliverytime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxprice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);

  const bottomContainers = restaurant?.bottomContainers;
  const goldoff = restaurant?.gold?.text;
  const prooff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className="explore-card cur-po">
      <div className="explore-card-cover">
        <img src={coverimg} alt={name} className="explore-card-image" />
        <div className="delivery-time">{deliverytime}</div>
        {prooff && <div className="pro-off">{prooff}</div>}
        {goldoff && <div className="gold-off absolute-center">{goldoff}</div>}
        {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating}
            <i className="absolute-center">
              <FontAwesomeIcon icon={faStar} />
            </i>
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, i) => {
              return (
                <span className="res-cuisine-tag">
                  {item}
                  {i != cuisines.length - 1 && ","}
                </span>
              );
            })}
          </div>
        )}
        {approxprice && <div className="approx-price">{approxprice}</div>}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="card-seperator"></div>
          <div className="explore-bottom">
            <img
              src={bottomContainers[0]?.image?.url}
              style={{ height: "18px" }}
              alt={bottomContainers[0]?.text}
            />
            <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explorecard;
