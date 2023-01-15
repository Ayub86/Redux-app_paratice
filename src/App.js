import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Posts from './Posts'
import Createpost from './Createpost'
const App = () => {
  return (
    <>
    
       <div>
       <Navbar/>
       <Routes>
      <Route path="/" element={<Posts/>}  /> 
      <Route path="/createpost" element={<Createpost />} />
    </Routes>
    </div>
    </>
  )
}

export default App

