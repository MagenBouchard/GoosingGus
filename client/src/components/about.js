import React from 'react';
import gus from "./styles/gus.jpg"
import './styles/about.css'





function About(){

    return (
        <div>
      <hr></hr>
<h3 className="text-center">
  <br></br> </h3>
      


<div >
<div className="container">
  <div className="about-container">
  <div className="row">
    <div className="col">
     <img className="gus" src={gus} alt="Gus"></img>
    
 

    </div>
    <div className="col">
      <br>
      </br>
      <hr></hr>
    Providing quality raw dog food, balanced and ready to serve to even the pickiest pet. <br>
    </br>
    <hr></hr>
    Made in house from scratch with only the best Quality Meats available.    
    <hr></hr> 
    Custom blends on request.
    <hr></hr>
    </div>
    
    </div>
   
 


    





    </div>
    </div>
</div>
    </div>

        ); 
    }
    
    export default About;