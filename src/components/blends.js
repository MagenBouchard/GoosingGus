import React from 'react';
import './styles/blends.css'



function Blendscard(props){

return (
  
  <div>
    <h1 ><strong></strong> {props.name}</h1>
  <div className="card" >

      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content" >
        <ul>
         
          <li>
            <strong>Ingredients:</strong> {props.ingredients}
          </li>
          <li>
            <strong>Price per lb:</strong> {props.price}
          </li>
        </ul>
      </div>
    </div>
    </div>

    ); 
}

export default Blendscard;