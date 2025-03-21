import React from 'react'
import Header from './components/Header'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-amber-50'>
      <Header/>
      <div className=''>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/cart' element={<h1>cart</h1>}/>
      </div>
    </div>
  )
}

export default App
