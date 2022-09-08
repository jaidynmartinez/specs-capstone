import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import image from './images/recipe-top-pic.jpeg'

import './recipe.css'

import RecipeCard from './RecipeCard'

const Recipes = (props) => {

    const [type, setType] =useState('')

    const recipeList = props.recipeData
    .filter(recipe=> recipe.petType.includes(type))
    .map(recipe => {
        return(
            <RecipeCard 
        key={recipe._id}
        recipe={recipe}
      />
        )
    })

    return(
        <div className='browse-div'>

            <div className='top-pic-container'>
                <hr className='recipe-hr'></hr>
                <h1 id='recipe-h1'>Explore our variety of recipes made by people who love their pets most!</h1>
                <hr className='recipe-hr'></hr>
                <img className='recipe-top-pic' src={image} alt='top-pic'/>
            </div>
            <div className='container'>
                <div className='category-div'>
                    <h2 onClick={()=> setType('')}>all</h2>
                    <h2 onClick={()=> setType('dog')}>dog</h2>
                    <h2 onClick={()=> setType('reptile')}>reptile</h2>
                    <h2 onClick={()=> setType('small animal')}>small animal</h2>
                    <h2 onClick={()=> setType('cat')}>cat</h2>
                    <h2 onClick={()=> setType('bird')}>bird</h2>
                    <h2 onClick={()=> setType('aquatic')}>aquatic</h2>
                </div>
            </div>
                <h2 className='recipe-title'>Learn quick recipes to TREAT your pet!</h2>

                <div id='button-div'>
                    <Link to='/recipes/create-your-own' className='recipe-form-button'>CREATE YOUR OWN</Link>
                </div>

                <section className='card-list'>{recipeList}</section>

                <p id='recipe-form-p'>
                    Enjoy all these free recipes or create your own 
                    <Link to='/recipes/create-your-own' className='recipe-form-link'>here!</Link>
                </p>
        </div>
    )
}

export default Recipes