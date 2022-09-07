import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'


import Nav from './components/Nav'

import Home from './components/pages/homePage/Home'
import Recipes from './components/pages/recipes/Recipes'
import RecipeCard from './components/pages/recipes/RecipeCard'
import Nutrition from './components/pages/nutrition/Nutrition'
import RecipeDetail from './components/pages/recipes/RecipeDetail'
import RecipeForm from './components/pages/recipes/RecipeForm'

import './App.css'

const App = () => {
  const [recipeData, setRecipeData] = useState([])

        useEffect(()=>{
            axios.get('http://localhost:5000/getAllRecipes')
            .then(res => {
                // console.log(res);
                setRecipeData(res.data);
            })
            .catch(err =>{
                console.log(err)
            })
        }, [])


  const newRecipe = (e, initialValues) => {
    e.preventDefualt()

    console.log(initialValues)
  }

    return(
        <div className='App'>
            <Nav />

            <Routes>

              <Route exact path='/' element={<Home />} />
              
              <Route exact path='/recipes' element={<Recipes recipeData={recipeData}/>} />

              <Route exact path='/recipes/create-your-own' element={<RecipeForm newRecipe={newRecipe}/>} />

              <Route exact path='/recipes/:recipeId' element={<RecipeDetail />} />

              <Route path='/nutrition' element={<Nutrition />} />

            </Routes>
        </div>
    )
}

export default App