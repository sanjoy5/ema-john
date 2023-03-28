import React, { useEffect, useState } from 'react'
import { addToDb, getShoppingCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import "./Shop.css"

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = []
        // Step 1: get id 
        for (const id in storedCart) {
            // step 2 : get the product by useing id 
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct, '989');
            if (addedProduct) {
                // step 3 : get quantity of the product 
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                // step 4 : add the addded product to the saved cart 
                savedCart.push(addedProduct)
            }
            // console.log(addedProduct);
        }
        // step 5 : set the cart 
        setCart(savedCart)
    }, [products])

    const handleAddtoCart = ({ product }) => {
        let newCart = []
        // const newCart = [...cart, product]
        // if product doesn't exist in the cart, then set quantity = 1 
        // if exist update quantity by 1 
        let exists = cart.find(pd => pd.id === product.id)
        if (!exists) {
            product.quantity = 1
            newCart = [...cart, product]
        } else {
            exists.quantity = exists.quantity + 1
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, exists]
        }

        setCart(newCart)
        addToDb(product.id)
    }
    // console.log(cart, '$$$');

    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product => <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart} />)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    )
}

export default Shop