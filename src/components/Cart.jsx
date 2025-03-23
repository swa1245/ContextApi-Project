import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'

const Cart = ({cart, setCart}) => {
  const [total,setTotal] = useState(0)
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
  },[cart])
  return (
    <div>
      <span  className='text-2xl'>Cart</span>
      <span className='text-2xl'>Total: {total}</span>
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
