import React from 'react'

import './main.css'

const Main = () => {
    return(
        <div className='main-body'>
            <section className='recipe-cards'>
                <h1>Dogs</h1>
                <div className='dog-recipe-cards'>
                <img src='https://st3.depositphotos.com/1077687/12669/v/950/depositphotos_126691148-stock-illustration-silhouette-with-pet-dish-food.jpg'/>
                <img src='https://st3.depositphotos.com/1077687/12669/v/950/depositphotos_126691148-stock-illustration-silhouette-with-pet-dish-food.jpg'/>
                <img src='https://st3.depositphotos.com/1077687/12669/v/950/depositphotos_126691148-stock-illustration-silhouette-with-pet-dish-food.jpg'/>
                <img src='https://st3.depositphotos.com/1077687/12669/v/950/depositphotos_126691148-stock-illustration-silhouette-with-pet-dish-food.jpg'/>
                </div>
                <h1>Cats</h1>
                <div className='cat-recipe-cards'>
                <img src='https://media.istockphoto.com/vectors/animal-can-food-vector-icon-design-vector-id1312114530?k=20&m=1312114530&s=612x612&w=0&h=f1BN4ceE8RaiW6rVhgkcLaP00WOng-D_oMn7rITGRK8='/>
                <img src='https://media.istockphoto.com/vectors/animal-can-food-vector-icon-design-vector-id1312114530?k=20&m=1312114530&s=612x612&w=0&h=f1BN4ceE8RaiW6rVhgkcLaP00WOng-D_oMn7rITGRK8='/>
                <img src='https://media.istockphoto.com/vectors/animal-can-food-vector-icon-design-vector-id1312114530?k=20&m=1312114530&s=612x612&w=0&h=f1BN4ceE8RaiW6rVhgkcLaP00WOng-D_oMn7rITGRK8='/>
                <img src='https://media.istockphoto.com/vectors/animal-can-food-vector-icon-design-vector-id1312114530?k=20&m=1312114530&s=612x612&w=0&h=f1BN4ceE8RaiW6rVhgkcLaP00WOng-D_oMn7rITGRK8='/>
                </div>
            </section>
        </div>
    )
}

export default Main