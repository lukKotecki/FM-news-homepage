import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Arrticle from './components/Article'
import Section from './components/Section'
import Aside from './components/Aside'

function App() {

  
  return (
    <div className='main-wrapper'>
      <Header />
      <Main>
        <Arrticle />
        <Aside />
        <Section />
      </Main>

    </div>
  )
}

export default App
