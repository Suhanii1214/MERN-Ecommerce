import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { fetchItemById } from '../redux/actions/itemActions';

export const SingleProduct = () => {
  const dispatch = useDispatch()
  const selectedItem = useSelector(state => state.item.selectedItem)
  const loading = useSelector((state) => state.item.loading)

  console.log(selectedItem);

  const { title, price, description, image} = selectedItem

  const navigate = useNavigate()
  const { key } = useParams()

  useEffect(() => {
    dispatch(fetchItemById(key))
  }, [dispatch, key])

  if(loading) {
    return <p>Loading..</p>
  }

  if(!selectedItem) {
    navigate('/store')
    return null
  }

  return (
    <div className='grid grid-cols-3 m-10'>
          <div key={key}>
            <div className='border'>
              <img src={image} alt="No Image Available" />
            </div>
            <div className='col-span-2 border pl-5'>
              <div className='text-3xl font-semibold'>{title}</div>
              <div className='text-xl'>{price}</div>
              <div>{description}</div>
              <button className='font-bold px-5 py-2 bg-black text-white rounded my-3 hover:opacity-70'>
                Add to Cart
              </button>
              <button className='font-bold px-5 py-2 rounded my-3 mx-3 border-2 border-black hover:opacity-50'>
                BUY NOW
              </button>
            </div>
          </div>
    </div>
  );
};
