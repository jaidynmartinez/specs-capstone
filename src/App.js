import React from 'react'
import { Route } from 'react-router-dom'

import Header from './components/homePage/Header'
import Hero from './components/homePage/Hero'
import Main from './components/homePage/Main'
import Nav from './components/homePage/Nav'

import Nutrition from './components/pages/Nutrition'
import Browse from './components/pages/Browse'

import './App.css'

const App = () => {
    return(
        <div>
            <Header />
            <Nav />
            <Route exact path='/'>
              <h1 className='app--h1'>Welcome</h1>
              <Hero />
              <Main />
            </Route>
            
            <Route path='/browse'>
              <Browse />
            </Route>

            <Route path='/nutrition'>
              <Nutrition />
            </Route>
        </div>
    )
}

export default App