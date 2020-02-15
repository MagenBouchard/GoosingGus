import React from 'react';
import './styles/body.css'

function Body(props){
    return (
        <div>
            <div className="wrapper">{props.children}</div>



        </div>
    )
}

export default Body;