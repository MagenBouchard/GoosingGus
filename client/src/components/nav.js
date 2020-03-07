import React from "react";
import "./styles/nav.css"

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding
// We use JSX curly braces to evaluate the style object

function Nav({logout}) {
    return (
      <div >
        <nav >



        <a className="" href="/admin">
            Admin
          </a>
          <button
          className=" logout-button"
           text="Logout"
              onClick={logout}
              classes="">
            Logout
          </button>

       
         
        </nav>


        
      
        </div>
      );
    }

export default Nav;
