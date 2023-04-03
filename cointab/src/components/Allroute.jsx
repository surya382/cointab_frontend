import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

const Allroute = () => {
  return (
    <div>
         <Routes>
             <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            
        </Routes>
    </div>
  )
}

export default Allroute