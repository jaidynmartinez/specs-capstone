import React from 'react'

import SafeFoodCard from './SafeFoodCard'

import safeFoodData from '../../../foodData'

const Nutrition = () =>{

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
        <div>
            <h1>Nutrition and Food-Safe List</h1>
            {safeFoodCard}
        </div>
    )
}

export default Nutrition

