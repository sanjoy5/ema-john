import React from 'react'
import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'



const ReviewItems = ({ product, handleRemoveFromCart }) => {

    const { id, name, img, price, quantity } = product

    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='product_name'>{name}</p>
                <p className="product_price">Price: <span className="orange_text">${price}</span></p>
                <p className="product_quantity">Order Quantity: <span className="orange_text">{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete_icon' icon={faTrashAlt} />
            </button>
        </div>
    )
}

export default ReviewItems