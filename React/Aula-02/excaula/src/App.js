import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import AddressArea from "./components/AddressArea/AddressArea";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <AddressArea />
      <Footer />
    </>
  );
}

export default App;
