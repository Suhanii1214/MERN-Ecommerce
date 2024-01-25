import React from 'react'
import { OrderCard } from './OrderCard'

export const Checkout = () => {
  return <div className='m-5'>
    <h2 className='text-3xl font-bold'>Checkout</h2>
    <div className='grid grid-cols-2 my-5'>
    <div className='col-span-1 h-screen p-5'>
        <div className='mb-5'>
            <h2 className='text-lg font-semibold my-3'>Contact Information</h2>
            <label htmlFor='email' className='m-1'>Email address</label>
            <input
                type='email'
                name='email'
                placeholder='Enter Email'
                className='bg-gray-200 w-full px-3 py-1 my-2 rounded-lg'
            />
        </div>
        <hr/>
        <div className='mt-5'>
            <h2 className='text-lg font-semibold my-3'>Shipping Information</h2>
            <div className='my-3'>
                <label htmlFor='name' className='m-1'>Full Name</label>
                <input
                    type='text'
                    name='name'
                    placeholder='Enter Full Name'
                    className='bg-gray-200 w-full px-3 py-1 my-2 rounded-lg'
                />
            </div>
            <div className='my-3'>
                <label htmlFor='contact' className='m-1'>Contact No.</label>
                <input
                    type='number'
                    name='contact'
                    placeholder='Enter Contact No.'
                    className='bg-gray-200 w-full px-3 py-1 my-2 rounded-lg'
                />
            </div>
            <div className='my-3'>
                <label htmlFor='address' className='mx-1'>Address</label>
                <textarea
                    type='text'
                    name='address'
                    placeholder='Enter Address'
                    className='bg-gray-200 w-full px-3 py-1 my-2 rounded-lg'
                />
            </div>
        </div>
    </div>
    <div className='p-5'>
        <h2 className='text-lg font-semibold my-3'>Order Summary</h2>
        <div className='border-2 rounded-xl p-5'>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <hr/>
        <div className='flex flex-row justify-between my-3'>
            <p>Subtotal:</p>
            <p>Rs.4999</p>
        </div>
        <div className='flex flex-row justify-between my-3'>
            <p>Shipping Charges:</p>
            <p>Rs.60</p>
        </div>
        <hr/>
        <div className='flex flex-row justify-between my-3 text-lg font-semibold'>
            <p>Total:</p>
            <p>Rs.5059</p>
        </div>
        <hr/>
        <button className='bg-black text-white font-semibold hover:opacity-70 py-3 mx-2 mt-10 mb-5 rounded-lg w-full'>Pay Now</button>
        </div>
    </div>
    </div>
</div>
}
