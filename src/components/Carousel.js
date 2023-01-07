import peopleImage from '../images/brooke-cagle-unsplash.jpg'
import rpgImage from '../images/clint-bustrillos-unsplash.jpg'
import boardImage from '../images/folu-eludire-unsplash.jpg'
// import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import './Carousel.css'


const Carousel = () => {
  
  return (

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={peopleImage} className="d-block w-100" alt="pessoas conversando"/>
    </div>
    <div className="carousel-item">
      <img src={boardImage} className="d-block w-100" alt="pessoas conversando"/>
    </div>
    <div className="carousel-item">
    <img src={rpgImage} className="d-block w-100" alt="pessoas conversando"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
export default Carousel;



//     const responsive = {
//         superLargeDesktop: {
          
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };

//     return (

//       <Carousel responsive={responsive}>

//                 <div><img src= {peopleImage} classNameName="img-thumbnail " alt="imagem de pessoas reunidas e felizes"/></div>
//                 <div><img src= {peopleImage} classNameName="img-thumbnail " alt="imagem de pessoas reunidas e felizes"/></div>
//                 <div><img src= {peopleImage} classNameName="img-thumbnail " alt="imagem de pessoas reunidas e felizes"/></div>
                
           
//       </Carousel> 
      
//     );
    
// }

 
// export default CarouselImage;

