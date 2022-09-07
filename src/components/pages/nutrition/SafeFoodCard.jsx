import React from 'react'
import { useState } from 'react'

import './safeFoodCard.css'


const SafeFoodCard = (props) =>{

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {setIsOpen(!isOpen)};

  const safeFruits = props.safeFruits.map(safeFruit =>{
    return(
        <div>
            <li>☆ - {safeFruit}</li>
        </div>
    )
  });
  const avoidFruits = props.avoidFruits.map(avoidFruit =>{
    return(
        <div>
            <li>☆ - {avoidFruit}</li>
        </div>
    )
  });
  const safeVeggies = props.safeVeggies.map(safeVeggies =>{
    return(
        <div>
            <li>☆ - {safeVeggies}</li>
        </div>
    )
  });
  const avoidVeggies = props.avoidVeggies.map(avoidVeggies =>{
    return(
        <div>
            <li>☆ - {avoidVeggies}</li>
        </div>
    )
  });
  const otherSafe = props.otherSafe.map(otherSafe =>{
    return(
        <div>
            <li>☆ - {otherSafe}</li>
        </div>
    )
  });
  const otherAvoid = props.otherAvoid.map(otherAvoid =>{
    return(
        <div>
            <li>☆ - {otherAvoid}</li>
        </div>
    )
  })

    return(
        <div>
        <div className='foodCard-container'>
            <div className='foodCard-background'>
                <h1 className='foodCard-h1' onClick={toggle}>{props.pet} -</h1>
                <p className='foodCard-p'>{props.description}</p>
                <div className='expand' onClick={toggle}></div>
            </div>
            {isOpen? 
            <div className='dropdown-container'>
                    <p>{props.nutrition}</p>
                    <hr></hr>
                    <ul className='dropdown-list'>
                        <h3 className='SF-dropdown-category'>
                            <h2>Safe Fruit:</h2>
                            {safeFruits}
                        </h3>
                        <hr id='vl'></hr>
                        <h3 className='SF-dropdown-category'>
                            <h2>Avoid Fruit:</h2>
                            {avoidFruits}
                        </h3>
                        <hr id='vl'></hr>
                        <h3 className='SF-dropdown-category'>
                            <h2>Safe Veggies:</h2>
                            {safeVeggies}
                        </h3>
                        <hr id='vl'></hr>
                        <h3 className='SF-dropdown-category'>
                            <h2>Avoid Veggies:</h2>
                            {avoidVeggies}
                        </h3>
                        <hr id='vl'></hr>
                        <h3 className='SF-dropdown-category'>
                            <h2>Other Safe:</h2>
                            {otherSafe}
                        </h3>
                        <hr id='vl'></hr>
                        <h3 className='SF-dropdown-category'>
                            <h2>Other Avoid:</h2>
                            {otherAvoid}
                        </h3>
                    </ul>
                </div>
            : null}
        </div>
        </div>
    )
}

export default SafeFoodCard