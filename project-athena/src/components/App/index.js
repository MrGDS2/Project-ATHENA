import React from 'react';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';


import '../App/home.css'


const App = () => {
  return(
    <Router>


        <Navbar className="border-bottom" bg="transparent" expand="lg"> 
          <Navbar.Brand> Athena </Navbar.Brand>
          <Navbar.Toggle  className="border-0" aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="nav-link" to="/signIn">Sign In</Link>
            </Nav>
           
          </Navbar.Collapse>
        </Navbar>


    
     
  
        <div className="container">
          
              <div className="content">
                <h1> Athena</h1>
              
              </div>
            </div>
       
    

     
</Router>



  );
}

 




export default App;



