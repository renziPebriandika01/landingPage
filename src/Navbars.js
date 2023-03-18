import Nav from 'react-bootstrap/Nav';
import React from 'react';


const Navbars = () => {
    return (
     
      <Nav justify variant="tabs" defaultActiveKey="/home" className="fs-4 bg-dark text-light">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Pengalaman</Nav.Link>
       </Nav.Item>
      </Nav>
    );
  }

    

export default Navbars;