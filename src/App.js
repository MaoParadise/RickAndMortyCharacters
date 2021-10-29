import logo from './logo.svg';
import './App.css';
import {Header} from './componets/Header'
import { Characters } from './componets/Characters';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Characters />
    </div>
  );
}

export default App;
