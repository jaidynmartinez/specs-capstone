import React from 'react'

import { Link } from 'react-router-dom'


import './nav.css'

const Nav = () => {
    return(
        <section>
            <div className='nav'>
                    <Link to='/'><h3>Home</h3></Link>
                    <Link to='/recipes'><h3>Recipes</h3></Link>
                    <Link to='/nutrition'><h3>Nutrition</h3></Link>
            </div>
            <hr className='nav-hr'></hr>
        </section>
    )
}

export default Nav