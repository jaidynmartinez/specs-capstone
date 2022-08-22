import React from 'react'

import { Link } from 'react-router-dom'


import './nav.css'

const Nav = () => {
    return(
        <section>
            <div className='nav'>
                    <Link to='/home'><h3>Home</h3></Link>
                    <Link to='/browse'><h3>Browse</h3></Link>
                    <Link to='/nutrition'><h3>Nutrition</h3></Link>
            </div>
            <hr/>
        </section>
    )
}

export default Nav