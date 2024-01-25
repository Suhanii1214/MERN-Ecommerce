import React from 'react'
import { HiSearch } from 'react-icons/hi'

export const FilterSection = () => {
  return (
    <div className='m-4'>
        <h2 className='text-xl font-semibold'>Filters</h2>
        <div className='flex flex-row bg-gray-200 rounded-lg px-2 my-4'>
        <HiSearch size={18} color='gray' className='mt-2'/>
        <input
            placeholder='Search'
            className='px-1 py-1 bg-gray-200 rounded-lg'
        />
        </div>
        <div className='my-3'>
            <p className='text-lg font-semibold'>Category</p>
            <ul>
                <li>
                    <input
                        type='checkbox'
                        className='p-5 m-2'
                    />
                    Tops
                </li>
                <li>
                    <input
                        type='checkbox'
                        className='p-5 m-2'
                    />
                    Jeans
                </li>
                <li>
                    <input
                        type='checkbox'
                        className='p-5 m-2'
                    />
                    Kurtas
                </li>
                <li>
                    <input
                        type='checkbox'
                        className='p-5 m-2'
                    />
                    Handbags
                </li>
                <li>
                    <input
                        type='checkbox'
                        className='p-5 m-2'
                    />
                    Jewellery
                </li>
                <li>
                    <input
                        type='checkbox'
                        className='p-5 m-2'
                    />
                    Heels
                </li>
            </ul>
        </div>
        <div className='my-3'>
            <p className='text-lg font-semibold'>Price</p>
            <ul>
                <li>
                    <input
                        type='checkbox'
                        className='p-5 m-2'
                    />
                    Below Rs.499
                </li>
                <li>
                    <input
                        type='checkbox'
                        className='p-5 m-2'
                    />
                    Rs.499 - Rs.1,999
                </li>
                <li>
                    <input
                        type='checkbox'
                        className='p-5 m-2'
                    />
                    Rs.1,999 - Rs.4,999
                </li>
                <li>
                    <input
                        type='checkbox'
                        className='p-5 m-2'
                    />
                    Rs.4,999 - Rs.9,999
                </li>
                <li>
                    <input
                        type='checkbox'
                        className='p-5 m-2'
                    />
                    Rs.9,999 - Rs.14,999
                </li>
                <li>
                    <input
                        type='checkbox'
                        className='p-5 m-2'
                    />
                    Above Rs.14,999
                </li>
            </ul>
        </div>
    </div>
  )
}
