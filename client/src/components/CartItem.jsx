import React from 'react'

export const CartItem = ({title, image, price, quantity}) => {

    const imageUrl = image.startsWith('data:image')
    ? image
    : `data:image/jpeg;base64,${image}`;

  return <div className='grid grid-cols-3'>
    <div>
        <img src={imageUrl} alt='No Image Available'/>
    </div>
    <div className='col-span-2'>
        <div>title</div>
        <div>quantity</div>
    </div>
  </div>
}
