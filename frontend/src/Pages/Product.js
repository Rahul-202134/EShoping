import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum';
import ProductDisplay from '../components/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const params = useParams();
console.log('Params:', params);  // Debug: Check if params are coming correctly

  const { sample } = useContext(ShopContext);  // Destructuring the context value
  const { productId } = useParams();  // Get productId from URL params

  console.log('Sample Data:', sample);  // Debug: Check if data is available
  console.log('Product ID from Params:', productId);  // Debug: Check productId

  // Ensure proper comparison by matching the types
  const product = sample?.find((e) => e.id === parseInt(productId)) || null;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
     <ProductDisplay product={product}/>
     <DescriptionBox />
     <RelatedProduct category={product.category} product={product}/>
    </div>
  );
};

export default Product;
