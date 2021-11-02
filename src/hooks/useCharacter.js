import { useState, useEffect, useMemo, useReducer, useCallback } from "react";



const useCharacter = () => {
    const [characters, setCharacters] = useState([]);

    const getRandomArrayChar = (min, max, loop) =>{
        let randomCharacters = [];
        for(let i = 0; i < loop; i++){
            randomCharacters.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return randomCharacters;
    }

    const getRandomCharacters = () =>{
        fetch(`https://rickandmortyapi.com/api/character/`+getRandomArrayChar(1, 671, 20))
        .then(response => response.json())
        .then(data => {
            setCharacters(data);
        })
    }
    

    useEffect( () => { // se puede usar useEffect para hacer request a una api 
        fetch(`https://rickandmortyapi.com/api/character/`+getRandomArrayChar(1, 671, 20))
        .then(response => response.json())
        .then(data => {
            setCharacters(data);
        }) // en results esta la info de los personajes
    }, []) // si dejas el array vacio, se ejecuta solo una vez



    const [search, setSearch] = useState('');

    // const handleSearch = (event) => {
    //     setSearch(event.target.value);
    // }

    const handleSearch = useCallback((event) => {
        setSearch(event.target.value);
    }, []);

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
            case 'REMOVE_FROM_FAVORITE':
                return {
                    ...state,
                    favorites: state.favorites.filter(favorite => favorite.id !== action.payload.id)
                  };
            default:
            return state;
        }
      }

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    const handleFavorite = favorite => {
        if(isIncludeOnFavorite(favorite.id)){
            dispatch({
                type: 'REMOVE_FROM_FAVORITE',
                payload: favorite
            })
        }else{
            dispatch({ 
                type: 'ADD_TO_FAVORITE',
                payload: favorite
            })
        }
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
        getRandomCharacters,
    }
}

export { useCharacter };