import React from 'react'
import { useState } from 'react'

import './safeFoodCard.css'

// import safeFoodData from '../foodData'


const SafeFoodCard = (props) =>{

  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => {setIsOpen(!isOpen)
    if (isOpen === true) {
        console.log('open')
    } else {
        console.log('closed')
    }
    };

    // const safeFood = safeFoodData


    return(
        <div className='foodCard-container'>
            <div className='foodCard-background'>
                <h1 className='foodCard-h1' onClick={toggle}>{props.pet} -</h1>
                <p className='foodCard-p'>{props.description}</p>
                <div className='expand' onClick={toggle}></div>
            </div>
            {isOpen? 
            <div className='dropdown-container'>
                <div className='dropdown-list'>
                    <p>{props.nutrition}</p>
                    <p>hello</p>
                </div>
            </div>
            : null}
            
        </div>
    )
}

export default SafeFoodCard