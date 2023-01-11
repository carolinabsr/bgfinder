import {Link} from 'react-router-dom'
import DiceImage from '../images/dice-by-Vexels.png'

const Navbar = () => {
    return ( 
        <nav className="navbar fixed-top bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"> 
              <img src= {DiceImage} alt="Logo de dados" width="30" height="24" className="d-inline-block align-text-top"/>
              <span class="navbar-text">   Página inicial</span>
            </Link> 
          </div>
      </nav>
    );
}
 
export default Navbar;