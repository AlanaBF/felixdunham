import Carousel from 'react-bootstrap/Carousel';

function SlideShow() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="img1" src={require('../../assets/images/tank.png')} alt="First slide" />
        <Carousel.Caption>
          {/* <h3></h3> */}
        </Carousel.Caption>


      </Carousel.Item>
      <Carousel.Item>
        <img className="img2" src={require('../../assets/images/fabee285-b67e-4ba8-822e-8e4e86a831df.jpg')} alt="Second slide" />
        <Carousel.Caption>
          {/* <h3></h3> */}
        </Carousel.Caption>

      </Carousel.Item>


    </Carousel>
  );
}

export default SlideShow;