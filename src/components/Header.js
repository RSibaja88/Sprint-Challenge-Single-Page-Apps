import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
      <div className="navLinks">
        <h3><Link to="/"> Welcome </Link></h3>
        <h3><Link to="/characters"> Characters </Link></h3>
     </div>
     </nav>
    </header>
  );
}
