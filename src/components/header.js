import React from "react";
import "./styles/header.css"



// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding



// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header>
     <h1 class="ml7">
  <span class="text-wrapper">
    <span class="letters">Goosing Gus Raw Dog Food</span>
  </span>
</h1>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js">
 


</script>
    </header>
  );
}

export default Header;
