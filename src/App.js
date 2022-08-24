import React from 'react'
import { Route } from 'react-router-dom'


import Nav from './components/Nav'

import Main from './components/pages/homePage/Main'
import Hero from './components/pages/homePage/Hero'
import Browse from './components/pages/Browse'
import RecipeCard from './components/RecipeCard'
import Nutrition from './components/pages/Nutrition'
import SafeFoodCard from './components/SafeFoodCard'

import recipeData from './recipeData'
import safeFoodData from './foodData'


import './App.css'

const App = () => {

  const recipeCards = recipeData.map(recipe => {
    return (
      <RecipeCard 
        key={recipe.id}
        img={recipe.img}
        title={recipe.title}
        petType={recipe.petType}
      />
    )
  })

  const safeFoodCard = safeFoodData.map(safeFood => {
    return (
      <SafeFoodCard 
        key={safeFood.id}
        pet={safeFood.pet}
        nutrition={safeFood.nutrition}
        description={safeFood.description}
        safeFruits={safeFood.safeFruits}
        avoidFruits={safeFood.avoidFruits}
        safeVeggies={safeFood.safeVeggies}
        avoidVeggies={safeFood.avoidVeggies}
        otherSafe={safeFood.otherSafe}
        otherAvoid={safeFood.otherAvoid}
      />
    )
  })
    return(
        <div className='App'>
            <Nav />
            <Route exact path='/'>
              <Hero />
              <Main />
            </Route>
            
            <Route path='/browse'>
              <Browse />
              <section className='card-list'>{recipeCards}</section>
            </Route>

            <Route path='/nutrition'>
              <Nutrition />
              {safeFoodCard}
            </Route>
        </div>
    )
}

export default App