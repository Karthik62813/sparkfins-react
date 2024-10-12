import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel className='carousel' interval={3000} >
      <Carousel.Item>
        <div className='carousel-text1'>
          <h1>Sparkfins</h1>
          <p>"Lorem, ipsum dolor sit a cectetur pisoing rgbrtbbgf."</p>
          <p>"Lorem, ipsum dolor sit a cectetur pisoing rgbrtbbgf ectetghur pisoing rgbrtbbgf."</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-text2'>
          <p>Lorem, ipsum dolor sit a cectetur pisoing rgbrtbbgf Lorem, ipsum dolor sit a cectetur pisoing rgbrtbbgf ectetghur pisoing rgbrtbbgf.</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;