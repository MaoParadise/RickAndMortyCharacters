import React, { useState, useEffect } from 'react';
import '../styles/Characters.css'

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => { // se puede usar useEffect para hacer request a una api 
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results)) // en results esta la info de los personajes
    }, []) // si dejas el array vacio, se ejecuta solo una vez
    

    return (
        <div className='charactersContainer'>
            {characters.map(character => {

                return  <div id="characterCard" className='characterCard'key={character.id}>
                            <div className='characterImage'>
                                <img src={character.image} alt={character.name} />    
                            </div>
                            <h2 className='characterTitle'> {character.name} </h2>
                            <div className='characterInformation'>
                                <p> status : { character.status} </p>
                                <p> specie : { character.species} </p>
                                <p> gender : { character.gender} </p>
                                <p> origin : { character.origin.name } </p>
                            </div>
                        </div>
                
            })}
        </div>
    );
}

export { Characters };
