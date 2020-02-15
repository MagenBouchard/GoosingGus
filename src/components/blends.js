import React from 'react';
import './styles/blends.css'


function Blends(props){
return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Blend Name:</strong> {props.name}
          </li>
          <li>
            <strong>Ingredients:</strong> {props.occupation}
          </li>
          <li>
            <strong>Price per lb:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>

    ); 
}

export default Blends;