import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Menu(props){
    return(

        <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
         
            Welcome

          </Link>
          
            <ul className="ul">
            <Link class="nav-link" to="/">
            <i class="fa fa-fw fa-home"></i>
                  Home
                  <span class="sr-only">(current)</span>
                  
                </Link>
                <Link class="nav-link" to="/about">
                <i class="fa fa-fw fa-user"></i> 
                  About
                </Link>
                <Link class="nav-link" to="/contact">
                
                <i class="fa fa-fw fa-envelope"></i>
                  Contact
                  
                </Link>

             </ul>
     


        </div>
        </nav>
        </div>
    )
}

export default Menu;