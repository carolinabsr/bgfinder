import peopleImage from '../images/brooke-cagle-unsplash.jpg'
import rpgImage from '../images/clint-bustrillos-unsplash.jpg'
import boardImage from '../images/folu-eludire-unsplash.jpg'
import './Carousel.css'
import  Carousel  from 'nuka-carousel';

const CarouselNuka = () => {

  return (

          <Carousel  wrapAround={true} zoomScale={0.1} style={{height:"400px"}} autoplay = "true">
            <img src={peopleImage} style={{width:"100vw", height:"400px"}}/>
            <img src={rpgImage} style={{width:"100vw", height:"400px"}} />
            <img src={boardImage} style={{width:"100vw", height:"400px"}} />
        </Carousel>
  )

}
export default CarouselNuka;



