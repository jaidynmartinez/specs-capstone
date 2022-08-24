import React from 'react'

import './header.css'

const Header = () =>{
    return(
        <div>
            <hr className='top-hr'/>
            <header>
                <img className='logo' src='https://cdn2.iconfinder.com/data/icons/1-animal-nature/16/bone_Line_pixelicons-512.png' alt='logo'/> 
            
                Bone Apetít
            </header>
            <hr className='bottom-hr'/>
        </div>
    )
}

export default Header