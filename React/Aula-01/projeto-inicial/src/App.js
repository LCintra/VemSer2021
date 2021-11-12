import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';
import Menu from './components/Menu';
import Footer from './components/Footer'

function App() {
  return(
    <Router>
      <Menu Link={Link}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/empresa" element={<Empresa/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
      </Routes>
      <Footer Link={Link}></Footer>
    </Router>
  );
}

export default App;
