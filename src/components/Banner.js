import {Link} from 'react-router-dom';
import '../pages/HomePage.css';
// import SearchGame from './SearchGame';

const Banner = () => {
    return ( 

            <div className="jumbotron jumbotron-fluid">
                <div className='bg-image'
                style={{backgroundImage: `url("https://images.unsplash.com/photo-1650024520252-14bdf7a3f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`}} alt='imagem de dados'>                
                
                    <div className="mask"style={{backgroundColor: `rgba(${0}, ${0}, ${0}, ${0.6})`}}>
                            
                            <div className='container'>
                                <h1 className="display-4">Olá jogadores!</h1>
                                <p className="lead">Conecte-se com jogadores de Board Games</p>
                                <p>Crie seu próprio grupo e entre para comunidade boadrgamer.</p>
                                <p className="lead">
                                <Link to='/group/create' className="btn btn-outline-light">Criar grupo</Link>
                                </p>
                            </div> 

                    </div>    
                </div>
                
            </div>




    );
}
 
export default Banner;