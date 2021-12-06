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


const Routers = ({ loading, auth, dispatch }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
      handleAuth(dispatch);
    }
    handleLoading(false,dispatch);
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  console.log(loading)

  return (
    <>
      <BrowserRouter>
        <Header />
        {auth ? (
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
  loading: state.loginReducer.loading,
  auth: state.loginReducer.auth
});

export default connect(mapStateToProps)(Routers);
