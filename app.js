import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object =HTMLElement(render)

const Header = () => {
  return (
    <div className="header">
      <div className="logocontainer">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
          alt=""
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#",
};
const RestaurantCard = (props) => {
  const { resname, cuisines, rating, deliveryTime } = props;

  return (
    <div className="res-card" style={{ backgroundColor: "#fdfff5" }}>
      <img
        className="res-logo"
        src="https://www.thespruceeats.com/thmb/kUoSjpktuKuTQpxkm-OFgOxl8s4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-basic-white-rice-2355883-10-5b0da96eba6177003622896e.jpg"
        alt=""
      />
      <h3>{resname}</h3>
      <h4>{cuisines}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resname="Meghna food"
          cuisines="Burgers, fast food"
          rating="4.4"
          deliveryTime="30 min"
        />
        <RestaurantCard
          resname="KFC"
          cuisines="Burgers, fast food"
          rating="4.7"
          deliveryTime="29 min"
        />
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
