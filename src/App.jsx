import React from 'react'
import Home from './pages/Home'
import New from './pages/New'
import Popular from './pages/Popular'
import Categories from './pages/Categories'
import Trending from './pages/Trending'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {

  // class jakasKlasa {
  //   pole;
  //   pole2;

  //   constructor(p, p2){
  //     this.pole = p2,
  //     this.pole2 = p
  //   }

  // }
  
  // console.log(jakasKlasa.name)

  return (

    <div className='main-wrapper'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element= {<Home />} />
            <Route path='home' element= {<Home />} />
            <Route path='new' element= {<New />} />
            <Route path='popular' element= {<Popular />} />
            <Route path='trending' element= {<Trending />} />
            <Route path='categories' element= {<Categories />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
