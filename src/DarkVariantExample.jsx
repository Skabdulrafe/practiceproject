import Carousel from 'react-bootstrap/Carousel';
import factorynew2 from './assets/images/factorynew2.jpg'
import heroSlider2 from "./assets/images/factorynew2.jpg";
import heroSlider3 from "./assets/images/boatnew.jpg";
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={factorynew2}
          height="300px"
          width= "200px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={heroSlider2}
          alt="Second slide"
          height="300px"
          width= "200px"

        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ heroSlider3}
          alt="Third slide"
           height="300px"
          width= "100px"
        />
        <Carousel.Caption>
          <h5>This is third slice</h5>
          <p>
            this is my thied slice 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;