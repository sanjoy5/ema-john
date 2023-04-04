import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import { useLoaderData } from 'react-router-dom'
import ReviewItems from '../ReviewiItems/ReviewItems'
import './Orders.css'
import { getShoppingCart, removeFromDb } from '../../utilities/fakedb'

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)


    const handleRemoveFromCart = (id) => {

        const remaining = cart.filter(pd => pd.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItems key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    )
}

export default Orders