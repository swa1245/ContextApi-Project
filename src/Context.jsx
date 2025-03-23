import React, { useState } from 'react'
import { createContext } from 'react'

export const Car = createContext()
const Context = ({children}) => {
    const[cart,setCart] =useState([])
  return (
    <Car.Provider value={{cart,setCart}}>
      {children}
    </Car.Provider>
  )
}

export default Context
