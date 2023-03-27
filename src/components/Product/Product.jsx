import React from 'react'
import './Product.css'

const Product = ({ product }) => {
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
            <button className="btn-cart">Add to Cart</button>
        </div>
    )
}

export default Product