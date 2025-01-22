import React from 'react';
import Item from './Item';
import sample from '../components/Assets/sample';

const ProductList = () => {
  // Filter items based on category 'women' and limit to 4 items
  const womenProducts = sample
    .filter((product) => product.category === 'women')
    .slice(0, 4); // Take the first 4 items only

  return (
    <div>
      <div className='container-heading'>
        <h2>Popular In Women</h2>
      </div>
      <div className="product-list">
        {womenProducts.map((product) => (
          <Item
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
