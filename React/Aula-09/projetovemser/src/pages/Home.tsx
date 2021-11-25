import {Link} from 'react-router-dom';

const Home = () =>{
  return(
    <div className="container content">
      <h1>Página Inicial</h1>
      <Link to="/login">Login</Link>
    </div>
  )
}
export default Home