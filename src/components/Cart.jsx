import React from 'react'
import SingleProduct from './SingleProduct'

const Cart = ({cart, setCart}) => {
  return (
    <div>
      <span  className='text-2xl'>Cart</span>
      <span className='text-2xl'>rs 100</span>
      <div className=''>
        {
          cart.map((p)=>{ 
            return <SingleProduct p={p} key={p.id} cart={cart} setCart={setCart}/>
          })
        }
      </div>
    </div>
  )
}

export default Cart
