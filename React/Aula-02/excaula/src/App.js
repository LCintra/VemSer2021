import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
