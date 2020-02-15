import React from 'react';
import './styles/body.css'

function Body(props){
    return (
        <div>
            <div className="wrapper">{props.children}
            <h4> Info on next batch date update section </h4>
            </div>



        </div>
    )
}

export default Body;