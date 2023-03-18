import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {nav} from "react";
import './App.css'
import Accordion from 'react-bootstrap/Accordion';

const Jumbotron = ()=> {
    return(
    <>
  <div className="jumbotron ">
  <div className="container ">
    <div className="row ">
    <div class="col-md-6">
        <img src="cid.jpg" className="img-thumbnail rounded-circle" alt="myfoto" style={{width:"350px"}}/>
      </div>
      
        <div className="col-md-6 text-center">
        <h1>Hallo Perkenalkan Nama Saya <span className="fw-bold text-decoration-underline">cid kagenou</span></h1>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tentang Saya</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Pendiikan</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </div>
  </div>
</div>
</>
    )
}

export default Jumbotron;