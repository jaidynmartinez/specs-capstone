import React from 'react'

import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import './recipeDetail.css'


const RecipeDetail =() =>{

    const location = useLocation()
    const {recipe} =location.state

    const {recipeId} = useParams()

    return(
        <div className='detail-background'>

            <div className='detail-wrapper'>
                    <hr className='detail-hr'></hr>
                <div>
                    <h1 className='detail-title'>{recipe.title}</h1>
                    <h3 className='detail-description'>{recipe.description}</h3>
                    <p className='detail-author'>By: {recipe.author}</p>
                </div>
                <div className='cover-img'>
                    <img src={`${recipe.img}`} alt='photo'/>
                </div>
            </div>

            <div className='detail-ingredients'>
                <h2 className='detail-ingredient'>Ingredients</h2>
                <div className='detail-ingredients-list-wrapper'>
                    {
                    recipe.ingredients.map(ingredient=> {
                        return(
                            <h3 className='detail-ingredients-list'>✼ {ingredient} </h3>
                        )
                    })
                    }
                </div>
            </div>
            <div className='detail-instructions'>
                <h2 className='detail-instruction'>Instructions</h2>
                <ol className='detail-ol'>
                        {
                            recipe.instructions.map(step=> {
                                return (
                                    <>
                                        <li>{step}</li>
                                    </>
                                )
                            })
                        }
                </ol>
            </div>
            <div className='detail-images'>
            </div>
        </div>
    )
}

export default RecipeDetail