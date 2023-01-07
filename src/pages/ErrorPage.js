import errorImage from "../images/page-not-found.png"
import './ErrorPage.css'


const ErrorPage = () => {
    return ( 
        <div className="container">
        <h1>Página não encontrada</h1>

        <img src= {errorImage} class="img-fluid" alt="imagem de erro"/>

     

        </div>
     );
}
 
export default ErrorPage;