import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbars from './Navbars'
import {Nav} from "react-bootstrap";
import Jumbotron from './Jumbotron';
import Profil from './profil';
import Corousel from './corousel';
import Footer from './footer';
function App() {
  return (
    <>
    <div className="bg-image text-dark">
    <Navbars/>
    <div className="me-2 my-5 ms-4">
    <Jumbotron/>
    </div>
    <div className="Profil">
    <Profil/>
    </div>
    <div className="fs-1 mb-4 text-dark text-center my-3 border border-dark border-2 opacity-5">Pengalaman Kerja</div>
    <div className="corousel">
    <Corousel/>
    </div>
    <Footer/>
    </div>
    </>
    
  );
}

export default App;
