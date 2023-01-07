import {Link} from 'react-router-dom'

const Footer = () => {
    return ( 

        <footer className="text-center text-white fixed-bottom" style={{backgroundColor: '#21081a'}}>
        
        <div className="container p-4"></div>
        
      
        
        <div className="text-center p-3" style={{backgroundColor: `rgba(${0}, ${0}, ${0}, ${0.2})`}}>
          <p>© 2022 Feito por <spam>Carolina Barbosa e Raphael Lacerda</spam> </p> 
          <p>Créditos: 
            <spam><Link to="https://mdbootstrap.com/" className="text-white">MDBootstrap.com</Link> | </spam>
            <spam><Link to="https://unsplash.com/" className="text-white">Unsplash.com</Link> </spam>
          
          </p>
          
        </div>
        
      </footer> 

    );
}
 
export default Footer;