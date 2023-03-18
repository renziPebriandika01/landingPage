import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const Corousel=()=> {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
  <>

    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item > 
        <img
          src="gmbr3.png"
          alt="First slide"
          className="d-block mx-auto"
        />
        <Carousel.Caption>
        
        <p className='text-dark fw-bold'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
       className="d-block mx-auto"
          src="gmbr3.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <p className='text-dark fw-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
      className="d-block mx-auto"
          src="gmbr3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
    
        <p className='text-dark fw-bold'> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}


export default Corousel;