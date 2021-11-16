import './App.css';
import Count from './components/Count';
import Mirror from './components/Mirror';
import CountProvider from './context/Count';
import NameProvider from './context/Name';

function App() {
  return (
    <div className="App">
      <NameProvider>
      <CountProvider>
        <Count/>
        <hr/>
        <Mirror/>
      </CountProvider>
      </NameProvider>
    </div>
  );
}

export default App;
