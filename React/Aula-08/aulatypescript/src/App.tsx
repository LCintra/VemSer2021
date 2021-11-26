import React, {useState, useEffect} from 'react';
import './App.css';
import List from './components/List'

interface IState{
  people:{
    name:string,
    age:number,
    url?:string,
    id: number,
    note?:string
  }[]
}

function App() {
  const [people,setPeople] = useState<IState['people']>([])
  useEffect(() => {
      setPeople([
        {
          name: 'tiaguinho',
          age:22,
          id:1,
          url:'data:image/jpeg;base64,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'
        },
        {
          name: 'joaozinho',
          age: 18,
          url: 'data:image/jpeg;base64,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',
          id:2,
          note:'teste note'
        }
      ])
  }, [])
  return (
    <div className="App">
      <h1>Turma VemSer DBC</h1>
      <List people={people}/>
    </div>
  );
}

export default App;