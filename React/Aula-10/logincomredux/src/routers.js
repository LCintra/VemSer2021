import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Pessoa from "./Pages/Pessoa";
import { handleAuth, handleLoading, handleIsLogin } from "./store/actions/login";
import { useEffect } from "react";
import api from "./api";
import { connect } from "react-redux";
import Endereco from "./Pages/Endereco";
import NotFound from "./Pages/NotFound";


const Routers = ({ props, dispatch }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
      handleAuth(dispatch);
    }
    handleLoading(dispatch);
  }, []);

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      handleIsLogin(dispatch)
    }
  },[])

  if (props.loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        {props.isLogin ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pessoa" element={<Pessoa />} />
            <Route path="/endereco" element={<Endereco />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        )}
        <Footer />
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = (state) => ({
  props: state.loginReducer,
});

export default connect(mapStateToProps)(Routers);
