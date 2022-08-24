import React from 'react'

import './browse.css'

import RecipeCard from '../RecipeCard'

const Browse = () => {
    return(
        <div className='browse-div'>
            <h1>Browse Selection</h1>
            <div className='container'>
                <div className='category-div'>
                    <h2>dog</h2>
                    <h2>reptile</h2>
                    <h2>small animal</h2>
                    <h2>cat</h2>
                    <h2>bird</h2>
                    <h2>aquatic</h2>
                </div>
            </div>
                <h2>Learn quick recipes to TREAT your pet!</h2>
        </div>
    )
}

export default Browse