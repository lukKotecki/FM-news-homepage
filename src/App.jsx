import React from 'react'
import Home from './pages/Home'
import New from './pages/New'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {

  
  return (

    <div className='main-wrapper'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element= {<Home />} />
            <Route path='/home' element= {<Home />} />
            <Route path='/new' element= {<New />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
