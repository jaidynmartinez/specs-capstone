import React from 'react'
import { Link } from 'react-router-dom'


import './recipeCard.css'

const RecipeCard = (props) =>{

    const recipe = props.recipe

    return(
        <div className='card-container'>
            <Link to={`/recipes/${recipe.id}`} state={{recipe: props.recipe}}>
                <div className='card-contents'>
                    <img src={recipe.img}/>
                    <div className='card-description'>
                    <h3>{recipe.title} </h3>
                    <h4>{recipe.petType}</h4>
                    </div>
                </div>
            </Link>
        </div>
        )
}

export default RecipeCard

