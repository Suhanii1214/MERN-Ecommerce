import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCart } from '../redux/actions/cartActions'

export const Cart = () => {
    const cart = useSelector(state => state.cart)
    const userId = useSelector(state => state.auth.user?.id)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch()

    console.log(cart);

    useEffect(() => {
      const getCartItems = () => {
        if (isAuthenticated) {
            dispatch(fetchCart(userId));
        }
    } 
    getCartItems()
    }, [userId, dispatch, isAuthenticated])

    return <>
        <h2 className='text-3xl font-bold m-5'>Shopping Cart</h2>
        <div className='grid grid-cols-3 m-5'>
        <div className='col-span-2 border'>
        </div> 
        <div className='border'>Right Side</div>
    </div>
    </>
}