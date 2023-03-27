import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, handleAddtoCart }) => {
    const { img, name, seller, ratings, quantity, price } = product



    return (
        <div className='product'>
            <img src={img} alt="Product" />
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddtoCart({ product })} className="btn-cart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
        </div>
    )
}

export default Product