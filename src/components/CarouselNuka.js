import boardImage from '../images/fox-hyde-unsplash.jpg'
import rpgImage from '../images/clint-bustrillos-unsplash.jpg'
import diceImage from '../images/nika-benedictova-unsplash.jpg'
import  Carousel  from 'nuka-carousel';

const CarouselNuka = () => {

  return (

          <Carousel wrapAround={true} zoomScale={0.1} style={{height:"500px"}} autoplay = "true">
            <img src={diceImage} style={{width:"100vw", height:"500px", objectFit: 'cover'}}/>
            <img src={rpgImage} style={{width:"100vw", height:"500px", objectFit: 'cover'}} />
            <img src={boardImage} style={{width:"100vw", height:"500px", objectFit: 'cover'}} />
        </Carousel>
  )

}
export default CarouselNuka;



