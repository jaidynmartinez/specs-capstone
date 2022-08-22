import React from 'react'
import { Route } from 'react-router-dom'

import Header from './components/homePage/Header'
import Hero from './components/homePage/Hero'
import Main from './components/homePage/Main'
import Nav from './components/homePage/Nav'

import Nutrition from './components/pages/Nutrition'

const App = () => {
    return(
        <div>
            <Header />
            <Nav />
            <Route path='/home'>
              <Hero />
              <Main />
            </Route>
            
            <Route path='/nutrition'>
              <Nutrition />
            </Route>
        </div>
    )
}

export default App