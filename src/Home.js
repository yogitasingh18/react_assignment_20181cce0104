import React from 'react';
import './App.css';



function Home(){
    return(
        <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
            
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://www.ccpixs.com/ccimages/m/hello-gold-foil-text-m-1235.jpg"
                alt=""
              />
             
            </div>
            <div class="col-lg-5">
            < h2 className="headingText">Home</h2>
              <p>
                <b>Hello Everyone!!!</b><br/>
                I'm Yogita Singh<br/>
                Currently pursuing my B.Tech at Presidency University, Bengaluru.<br/>
                <br/>
                
                This is my very first Assignment for the value Added Course- React. ^_^
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;