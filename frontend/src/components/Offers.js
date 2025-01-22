import React from "react";
import offers from "../components/Assets/offers.png";

const Offers = () => {
  return (
    <div
      className="offers d-flex justify-content-between align-items-center py-5 px-4"
      style={{
        background: "linear-gradient(180deg, #fff 0%, rgb(244, 170, 225) 60%)",
        height: "70vh",
        width: "70%",
        margin: "auto",
        marginBottom: "150px",
      }}
    >
      <div className="offers-left d-flex flex-column justify-content-center text-center me-5">
        <h1 className="fw-bold">Exclusive Offer</h1>
        <h3 className="text-danger">Offers For You</h3>
        <p className="mb-4">Only On Best Seller Product</p>
        <button className="btn btn-danger rounded-pill px-4 py-2">Check Now</button>
      </div>
      <div className="offers-right">
        <img src={offers} alt="Exclusive Offer" className="img-fluid" />
      </div>
    </div>
  );
};

export default Offers;
