import React from 'react'
import '../../src/App.css'

function Header(){
    return(
        <header className='header'>
            Hearthstone
            {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg5sFVMw6pfxZOM7XLh0y2dkqOcTH64dAIPzQwhw2lPaumiYQp&usqp=CAU' alt='hearthstone logo'></img>  */}
            <h1 className='welcome-text'>Welcome, Boys make some room by the hearth </h1>
        </header>
    )
}

export default Header