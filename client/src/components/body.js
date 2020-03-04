import React from 'react';
import './styles/body.css'

function Body(props){
    return (
        <div>
            <div className="container">
            <div >{props.children}
       
            </div>


            </div>
        </div>
    )
}

export default Body;