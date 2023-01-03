import peopleImage from '../images/brooke-cagle-unsplash.jpg'
import rpgImage from '../images/clint-bustrillos-unsplash.jpg'
import boardImage from '../images/folu-eludire-unsplash.jpg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';


const CarouselImage = () => {

    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (

      <Carousel responsive={responsive}>

                <div><img src= {peopleImage} className="img-thumbnail " alt="imagem de pessoas reunidas e felizes"/></div>
                <div><img src= {peopleImage} className="img-thumbnail " alt="imagem de pessoas reunidas e felizes"/></div>
                <div><img src= {peopleImage} className="img-thumbnail " alt="imagem de pessoas reunidas e felizes"/></div>
                
           
      </Carousel> 
      
    );
    
}

 
export default CarouselImage;