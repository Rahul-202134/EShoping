import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item'
const ShopCategory = (props) => {
  const { sample } = useContext(ShopContext)
  return (
    <div>
      <div className='banner_img'>
        <img src={props.banner} alt="" />
      </div>
      <div className='ShopCategory-indexsort'>
        <p>
          <span>Showing 1-12</span> Out Of 36 Products
        </p>
        <div className="shopCategory-sort">
          Sort By<img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {sample.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} title={item.title} image={item.image} price={item.price} oldPrice={item.oldPrice} />
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="exploreMore-btn">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
