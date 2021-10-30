import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { useCharacter } from '../hooks/useCharacter';
import '../styles/Characters.css';


  



const Characters = () => {

    const { theme } = useContext(ThemeContext);

    const { favorites, handleFavorite, isIncludeOnFavorite,search, handleSearch, filteredCharacters} = useCharacter();

    // const [characters, setCharacters] = useState([]);


    

    // const filteredCharacters = characters.filter((character) => {
    //     return character.name.toLowerCase().includes(search.toLowerCase());
    // });

    

    // useEffect( () => { // se puede usar useEffect para hacer request a una api 
    //         fetch(`https://rickandmortyapi.com/api/character/`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setCharacters(data.results);
    //         }) // en results esta la info de los personajes
    // }, []) // si dejas el array vacio, se ejecuta solo una vez
    

    return (
        <div className='charactersContainer'>
            <div className='favoritesContainer'>
                {favorites.favorites.map(favorite => (
                    <div className="favoriteCard" key={favorite.id}>
                        <img src={favorite.image} alt={favorite.name} />
                        {favorite.name}
                    </div>
                
                ))}
            </div>
           
            <input className='searchCharacter' placeholder='Search by name' type='text' value={search} onChange={handleSearch} /> 
                { // si el evento tiene un value, no se puede usar el onChange con una funcion anonima 
                }


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
