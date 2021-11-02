import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../styles/Header.css'

const Header = () => {

    const { theme, handleTheme, getRandomCharacters } = useContext(ThemeContext);

    return (
        <div className="Header">
            <div className='title'>
                <h1>Twenty Rick And Morty's characters </h1>
                <h2 className='random' onClick={() => getRandomCharacters()}> Click to get random </h2>
            </div>
            <button className='modeButton darkButton' id='modeButton' type="button" onClick={handleTheme} >{ theme ? 'Light Mode' : 'Dark Move'}</button>
        </div>
    );
}

export {Header};
