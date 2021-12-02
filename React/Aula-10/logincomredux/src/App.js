import { Provider } from 'react-redux';
import './App.css';
import Routers from './routers';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routers/>
    </Provider>
  );
}

export default App;
