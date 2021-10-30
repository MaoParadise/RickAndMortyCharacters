import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../styles/Header.css'

const Header = () => {

    const { theme, handleTheme } = useContext(ThemeContext);

    return (
        <div className="Header">
            <h1> Rick And Morty's characters </h1>
            <button className='modeButton' id='modeButton' type="button" onClick={handleTheme} >{ theme ? 'Dark Move' : 'Light Mode'}</button>
        </div>
    );
}

export {Header};
