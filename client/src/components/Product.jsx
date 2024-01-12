// Product.js
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

export const Product = ({productId, title, price, description, image}) => {
  const navigate = useNavigate()
  console.log(productId);
  const imageUrl = image.startsWith('data:image') ? image : `data:image/jpeg;base64,${image}`;

  return (
            <div key={productId} className="group" onClick={() => navigate('/item/' + productId)}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={imageUrl}
                  alt="No Image Available"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Rs. {price}</p>
            </div>
  );
};
