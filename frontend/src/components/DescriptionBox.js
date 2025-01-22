import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");

  const description =
    "This product is crafted with premium materials to ensure excellent performance and long-lasting durability.";

  const reviews = [
    { name: "John Doe", rating: 5, comment: "Amazing product! Highly recommend." },
    { name: "Jane Smith", rating: 4, comment: "Good quality, but shipping was a bit slow." },
    { name: "Alice Johnson", rating: 3, comment: "Product is decent for the price." },
  ];

  return (
    <div className="container my-4">
      {/* Tab Buttons */}
      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn ${activeTab === "description" ? "btn-primary" : "btn-outline-primary"} me-2`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`btn ${activeTab === "reviews" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({reviews.length})
        </button>
      </div>

      {/* Content Box */}
      <div className="card shadow p-4">
        {activeTab === "description" && (
          <div>
            <h2 className="mb-3">Product Description</h2>
            <p>{description}</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h2 className="mb-3">Customer Reviews ({reviews.length})</h2>
            {reviews.length === 0 ? (
              <p>No reviews yet.</p>
            ) : (
              reviews.map((review, index) => (
                <div key={index} className="mb-3 border-bottom pb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <strong>{review.name}</strong>
                    <div>
                      {Array(review.rating)
                        .fill()
                        .map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} className="text-warning" />
                        ))}
                    </div>
                  </div>
                  <p className="mt-2">{review.comment}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
