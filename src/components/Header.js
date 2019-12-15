import React from "react";
import {Link} from "react-router-dom";


export default function Header() {

  return (
    <header className="ui centered">
      <h1 className="ui center">RICK &amp; MORTY<br/>FAN PAGE</h1>
      <nav>
      <div className="navLinks">
        <h3><Link to="/"> WELCOME </Link></h3>
        <h3><Link to="/characters"> CHARACTERS </Link></h3>
     </div>
     </nav>
    </header>
  );
}

