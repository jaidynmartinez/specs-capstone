import React from 'react'
import img1 from './images/img1.JPG'
import img2 from './images/img2.JPG'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img8 from './images/img8.jpg'
import img7 from './images/img7.JPG'
import img9 from './images/img9.jpg'
import bunny1 from './images/bunny1.png'
import bunny2 from './images/bunny2.png'
import gerbil from './images/gerbil.png'
import ferret from './images/ferret.png'
import cat from './images/cat.jpeg'

import './hero.css'

const Hero = () =>{
    return(
        <div className='main-body'>
            <div className='header-pic-div'>
            <img className='header-pic' src={cat}/>
            </div>
            <h3>Want a healthier alternative to store-bought treats?</h3>
            <h3>Don't know if your fur-baby can have a certain snack?</h3>
            <h2>Check out our homemade recipes, or food-safe list to create your own!</h2>
            <div className='hero'>
                <section className='column-1'>
                    <div className='first'>
                        <img className='img' src={img7} />
                    </div>
                </section>
                <section className='column-2'>
                    <div className='first'>
                        <img id='column-2-img-1' src={img2}/>
                    </div>
                    <div className='first'>
                        <img id='column-2-img-2'src={img9}/>
                    </div>
                </section>
                <section className='column-3'>
                    <div className='first'>
                        <img id='column-3-img-1' src={img4}/>
                    </div>
                    <div className='first'>
                        <img id='column-3-img-2' src={img5}/>
                    </div>
                </section>
                <section className='column-4'>
                    <div className='first'>
                        <img id='column-4-img-1' src={img8}/>
                    </div>
                    <div className='first'>
                        <img id='column-4-img-2' src={img1}/>
                    </div>
                </section>
                <section className='column-5'>
                    <div className='first'>
                        <img src={img3}/>
                    </div>
                </section>
            </div>
            <hr className='treat-hr'></hr>
            {/* <h1>Treat Your Pet!</h1>
            <div className='bunImg-div'>
            <img className='gerbilImg' src={gerbil} />
            <img className='bunImg2' src={bunny2} />
            <img className='ferretImg' src={ferret} />
            <img className='bunImg1' src={bunny1} />
            </div>
            <h1 className=''>Browse Recipes</h1>
            <hr className='treat-hr'></hr> */}
        </div>
    )
}
export default Hero