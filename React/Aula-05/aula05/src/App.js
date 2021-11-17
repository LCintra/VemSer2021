import './App.css';
import { createContext,useContext } from 'react'

const ContextTheme = createContext();

function App() {
  const theme = 'light'
  return (
    <div className="App">
      <header className="App-header">
        <ContextTheme.Provider value={{theme}}>
          <Login/>
        </ContextTheme.Provider>
      </header>
    </div>
  );
}

function Login(){
  return <Button/>
}

function Button(){
  const {theme} = useContext(ContextTheme)
  return(<button>{theme}</button>)
}

export default App;
