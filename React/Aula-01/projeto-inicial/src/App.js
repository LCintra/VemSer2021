import './App.css';
import List from './components/List';
import Form from './components/Form';
import Eventos from './components/Eventos';
import SayMyName from './components/SayMyName'
import Condicional from './components/Condicional';

function App() {
  function calcular(numero){
    return numero + 1
  }

  return (
    <div className="App">
        {/* <Eventos calc={calcular} num={10}/>
        <SayMyName calcular={calcular}/>*/}
        <Form/>
        <Condicional/>
    </div>
  );
}

export default App;
