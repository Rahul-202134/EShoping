import React from 'react';
import Item from './Item';
import sample from '../components/Assets/sample';

const RelatedProduct = (props) => {
  // Filter items based on the passed category and limit to 4 items
  const filteredProducts = sample
    .filter((product) => {
      // Logic to filter based on category
      if (props.category === 'men') {
        return product.category === 'men';
      } else if (props.category === 'women') {
        return product.category === 'women';
      } else if (props.category === 'electronics') {
        return product.category === 'electronics';
      }
      return false; // No match found
    })
    .slice(0, 4); // Take the first 4 items only

  return (
    <div>
      <div className='container-heading'>
        <h2>Related Products</h2>
      </div>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;
