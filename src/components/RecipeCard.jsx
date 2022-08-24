import React from 'react'

import './recipeCard.css'

const RecipeCard = (props) =>{
    console.log(props.img)
    return(
        <div className='card-container'>
            <div className='card-contents'>
                <img src={props.img}/>
                <div className='card-description'>
                    <h3>{props.title} - </h3>
                    <h4>{props.petType}</h4>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard

