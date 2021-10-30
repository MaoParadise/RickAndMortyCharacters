import { useState, useEffect, useMemo, useReducer } from "react";

const useCharacter = () => {
    
    const [characters, setCharacters] = useState([]);

    useEffect( () => { // se puede usar useEffect para hacer request a una api 
        fetch(`https://rickandmortyapi.com/api/character/`)
        .then(response => response.json())
        .then(data => {
            setCharacters(data.results);
        }) // en results esta la info de los personajes
    }, []) // si dejas el array vacio, se ejecuta solo una vez


    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const filteredCharacters = useMemo(() => 
        characters.filter((character) =>{
            return character.name.toLowerCase().includes(search.toLowerCase());
        }), [search, characters]
    );



    // ----------------- Favorite section ------------------------// 

    const initialState = {
        favorites: []
      }
      
      const favoriteReducer = (state, action) => {
        switch (action.type) {
          case 'ADD_TO_FAVORITE':
            if(state.favorites.some(favorite => favorite.id === action.payload.id)){
                return state;
            }else{
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                  };
            }
            default:
            return state;
        }
      }

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    const handleFavorite = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
      }
    
    const isIncludeOnFavorite = (id) => {
        return favorites.favorites.some(favorite => favorite.id === id);
    }

    // ----------------- End favorite section ------------------------// 

    return {
        favorites,
        handleFavorite,
        isIncludeOnFavorite,
        filteredCharacters,
        search,
        handleSearch,
    }
}

export { useCharacter };