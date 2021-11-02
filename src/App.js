import './App.css';
import {Header} from './componets/Header'
import { Characters } from './componets/Characters';
import ThemeContext from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';
import { useCharacter } from './hooks/useCharacter';

function App() {

  //const initialTheme = useTheme();
  const { theme, handleTheme } = useTheme();
  const { 
        favorites,
        handleFavorite,
        isIncludeOnFavorite,
        search,
        handleSearch,
        filteredCharacters,
        getRandomCharacters,
   } = useCharacter();

  return (
    <ThemeContext.Provider value={{theme, handleTheme, favorites,
      handleFavorite,
      isIncludeOnFavorite,
      search,
      handleSearch,
      filteredCharacters,
      getRandomCharacters,}}>
      <div className="App">
        <Header /> 
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
