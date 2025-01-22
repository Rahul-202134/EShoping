import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description'); // Track the active tab

  const description = 
    "This product is crafted with premium materials to ensure excellent performance and long-lasting durability.";

  const reviews = [
    { name: 'John Doe', rating: 5, comment: 'Amazing product! Highly recommend.' },
    { name: 'Jane Smith', rating: 4, comment: 'Good quality, but shipping was a bit slow.' },
    { name: 'Alice Johnson', rating: 3, comment: 'Product is decent for the price.' },
  ];

  return (
    <div className="description-reviews-box">
      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button
          className={activeTab === 'description' ? 'active' : ''}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={activeTab === 'reviews' ? 'active' : ''}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews ({reviews.length})
        </button>
      </div>

      {/* Content Box */}
      <div className="content-box">
        {activeTab === 'description' && (
          <div className="description-content">
            <h2>Product Description</h2>
            <p>{description}</p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="reviews-content">
            <h2>Customer Reviews ({reviews.length})</h2>
            {reviews.length === 0 ? (
              <p>No reviews yet.</p>
            ) : (
              reviews.map((review, index) => (
                <div key={index} className="review">
                  <div className="review-header">
                    <strong>{review.name}</strong>
                    <div className="review-stars">
                      {Array(review.rating)
                        .fill()
                        .map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} />
                        ))}
                    </div>
                  </div>
                  <p>{review.comment}</p>
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
