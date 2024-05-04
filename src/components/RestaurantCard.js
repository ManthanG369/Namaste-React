import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  console.log("props:", props);
  const resData = props?.resData;
  console.log("resData:", resData);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100} For Two</h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  );
};

export default RestaurantCard;
