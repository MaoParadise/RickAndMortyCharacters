import React, { useState } from 'react';
import '../styles/Header.css'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);
        if(!darkMode){
            document.body.classList.add('darkBody');
            document.getElementById('modeButton').classList.add('darkButton');
        }else{
            document.body.classList.remove('darkBody');
            document.getElementById('modeButton').classList.remove('darkButton');
        }
    }



    return (
        <div className="Header">
            <h1> Rick And Morty's characters </h1>
            <button className='modeButton' id='modeButton' type="button" onClick={handleClick} >{ darkMode ? 'Dark Move' : 'Light Mode'}</button>
        </div>
    );
}

export {Header};
