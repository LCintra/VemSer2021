import './App.css';
import { AuthProvider } from './context/AuthContext';
import Routers from './routers' 
import {Router} from 'react-router-dom'
import history from './history';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routers/>
      </Router>
    </AuthProvider>
  );
}

export default App;
