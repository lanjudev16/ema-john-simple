import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;
  const handleAddToCart=props.handleAddToCart
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p>Price ${price}</p>
        <p>Manufacture ${seller}</p>
        <p>Ratings {ratings} starts</p>
      </div>
      <button className="btn-cart" onClick={()=>handleAddToCart(props.product)}>
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    </div>
  );
};

export default Product;
