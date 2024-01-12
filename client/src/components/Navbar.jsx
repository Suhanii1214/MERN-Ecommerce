import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { HiShoppingBag, HiUser, HiSearch } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../redux/actions/cartActions'

const Navbar = () => {
    // const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const userId = useSelector((state) => state.auth.user?.id)
    // const cart = useSelector((state) => state.cart?.cart)
    // console.log(cart);
    // console.log(userId);

    const navigate = useNavigate()

    // useEffect(() => {
    //     if(isAuthenticated) {
    //         dispatch(fetchCart(userId))
    //     }
    // },[dispatch, isAuthenticated, userId])

    // const totalQuantity = (cart && cart.items) ? cart.items.reduce((total, item) => total + item.quantity, 0) : 0;    
    // console.log(totalQuantity);

    const handleUser = () => {
        if(isAuthenticated) {
            navigate(`/user/${userId}`)
        } else {
            navigate("/login")
        }
    }

  return <header className=' w-full h-16 bg-white shadow-md'>
    <div className='flex flex-row justify-between'>
        <div className='p-2 ml-5 mt-1'>
            <ul className='flex flex-row items-center gap-5'>
                <li onClick={() => navigate('/')} className=' ml-3 mr-5 cursor-pointer font-bold text-2xl'>BE:BOLD</li>
                <li onClick={() => navigate('/store')} className='text-black font-bold mt-1 cursor-pointer'>Our Store</li>
                <li onClick={() => navigate('/premium')} className='text-[#ddbe42] font-bold px-3 py-1 mt-1 border border-[#ddbe42] rounded-full cursor-pointer'>Premium</li>
            </ul>
        </div>
        <div className='p-4 mt-1 mr-3'>
            <ul className='flex flex-row items-center gap-7'>
                <li className='cursor-pointer'> <HiSearch size={25}/> </li>
                <li className='cursor-pointer' onClick={handleUser}>
                    {isAuthenticated ? <HiUser size={25}/> : "Log In"}
                </li>
                <li className='mr-3 cursor-pointer relative' onClick={() => navigate(`/cart/${userId}`)}>
                    <HiShoppingBag size={25}/>
                    {/* {totalQuantity > 0 && <span className="text-center bg-black text-white absolute top-[-5px] right-[-12px] line-[1] rounded-full">{totalQuantity}</span>} */}
                </li>
            </ul>
        </div>
    </div>
  </header>
}

export default Navbar