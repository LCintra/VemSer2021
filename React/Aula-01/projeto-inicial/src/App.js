import './App.css';
import FirstComponent from './components/FirstComponent'
import SayMyName from './components/SayMyName';
import Personal from './components/Personal';
import List from './components/List';

function App() {
const url = 'https://via.placeholder.com/150';
const name = 'Joãozinho'

  return (
    <div className="App">
        <SayMyName name={name}/>
        <List/>
    </div>
  );
}

export default App;
