import axios from "axios";
import { Routes, Route } from "react-router-dom";
import teste from "../images/teste.png"
import {Link} from 'react-router-dom'
import './HomePage.css';


const HomePage = () => {

    return ( 
        <div className="HomePage">



            <div className="header-container text-center">

                
                <h1><Link className='create-group' to='/group/create'> Crie seu grupo </Link></h1>

                
                
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar grupo" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Pesquisar</button>
                </form>

            </div>

            
            <div className="container text-center">
                <div class="row">
                <div class="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={teste} className="card-img-top" alt="teste"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Ver detalhes</a>
                        </div>
                        </div>
                    </div>
                <div class="col">
                <div className="card" style={{width: '18rem'}}>
                        <img src={teste} className="card-img-top" alt="teste"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Ver detalhes</a>
                        </div>
                        </div>
                </div>
                <div class="col">
                <div className="card" style={{width: '18rem'}}>
                        <img src={teste} className="card-img-top" alt="teste"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Ver detalhes</a>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    

        </div>
     );
}
 
export default HomePage;