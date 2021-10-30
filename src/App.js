import logo from './logo.svg';
import './App.css';
import {Header} from './componets/Header'
import { Characters } from './componets/Characters';
import ThemeContext from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';

function App() {

  const initialTheme = useTheme();

  return (
    <ThemeContext.Provider value={initialTheme}>
      <div className="App">
        <Header /> 
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
