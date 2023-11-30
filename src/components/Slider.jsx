import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import image3 from '../assets/caroussel/makup.jpg'
import image1 from '../assets/caroussel/parfums.jpg'
import image2 from '../assets/caroussel/soins.jpg'
function Slider() {
  return (
    <Container>
    <Carousel data-bs-theme="dark" style={{marginTop:'40px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src={image1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ image2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          
        />
        
      </Carousel.Item>
    </Carousel></Container>
  );
}

export default Slider;