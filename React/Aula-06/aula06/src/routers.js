import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import Pokemon from './pages/Pokemon'
import Users from './pages/Users'

const Routers = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path={'/login'} element={<Login/>}></Route>
        <Route path={'users'} element={<Users/>}></Route>
        <Route path={'/pokemon'} element={<Pokemon/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers;