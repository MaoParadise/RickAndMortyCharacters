import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
//import { useCharacter } from '../hooks/useCharacter';
import '../styles/Characters.css';
import Search from './Search';


const Characters = () => {

    const { 
        theme,
        favorites,
        handleFavorite,
        isIncludeOnFavorite,
        search,
        handleSearch,
        filteredCharacters,
    } = useContext(ThemeContext);

    // const { 
    //     favorites,
    //     handleFavorite,
    //     isIncludeOnFavorite,
    //     search,
    //     handleSearch,
    //     filteredCharacters,
    //     getRandomCharacters,
    // } = useCharacter();  
    

    return (
        <div className='charactersContainer'>
            <div className='favoritesContainer'>
                {favorites.favorites.map(favorite => (
                    <div className="favoriteCard" key={favorite.id}>
                        <img src={favorite.image} alt={favorite.name} />
                        {favorite.name}
                        <span
                            onClick={() => handleFavorite(favorite)}
                            className={`favoriteButton material-icons-round favorite-color` }> star_rate
                        </span> 
                    </div>
                
                ))}
            </div>
           

           <Search search={search} handleSearch={handleSearch} /> 


            {filteredCharacters.map(character => (
                <div id="characterCard" className={`characterCard ${theme ? 'darkCard' : ''}`} key={character.id}>
                    <div className='characterImage'>
                        <img src={character.image} alt={character.name} />
                        <span
                            onClick={() => handleFavorite(character)}
                            className={`favoriteButton material-icons-round ` +
                                        `${theme ? 'darkFavoriteButton' : ''}` +
                                        `${isIncludeOnFavorite(character.id) ? ' favorite-color' : '' }` }> star_rate
                        </span>                        
                    </div>
                    <h2 className='characterTitle'> {character.name} </h2>
                    <div className='characterInformation '>
                        <p> context:  </p>
                        <p> status : {character.status} </p>
                        <p> specie : {character.species} </p>
                        <p> gender : {character.gender} </p>
                        <p> origin : {character.origin.name} </p>
                    </div>
                    
                </div>

            ))}
        </div>
    );
}

export { Characters };
