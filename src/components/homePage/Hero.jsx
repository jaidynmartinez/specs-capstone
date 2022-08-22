import React from 'react'

import './hero.css'

const Hero = () =>{
    return(
        <div className='hero'>
            <section className='column-1'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzn8aOW_BLeQXUQ0FXmtBFi9OvxRwbDCJZA&usqp=CAU'/>
            </section>
            <section className='column-2'>
                <img id='column-2-img-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzn8aOW_BLeQXUQ0FXmtBFi9OvxRwbDCJZA&usqp=CAU'/>
                <img id='column-2-img-2'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzn8aOW_BLeQXUQ0FXmtBFi9OvxRwbDCJZA&usqp=CAU'/>
            </section>
            <section className='column-3'>
                <img id='column-3-img-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzn8aOW_BLeQXUQ0FXmtBFi9OvxRwbDCJZA&usqp=CAU'/>
                <img id='column-3-img-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzn8aOW_BLeQXUQ0FXmtBFi9OvxRwbDCJZA&usqp=CAU'/>
            </section>
            <section className='column-4'>
                <img id='column-4-img-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzn8aOW_BLeQXUQ0FXmtBFi9OvxRwbDCJZA&usqp=CAU'/>
                <img id='column-4-img-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzn8aOW_BLeQXUQ0FXmtBFi9OvxRwbDCJZA&usqp=CAU'/>
            </section>
            <section className='column-5'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzn8aOW_BLeQXUQ0FXmtBFi9OvxRwbDCJZA&usqp=CAU'/>
            </section>
        </div>
    )
}
export default Hero