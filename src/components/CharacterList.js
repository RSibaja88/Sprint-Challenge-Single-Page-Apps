import React, { useEffect, useState } from "react";
import axios from "axios";
// import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
     .get("https://rickandmortyapi.com/api/character/")
     .then(response => {
       console.log("API response: ", response.data.results)
       setChar(response.data.results);
     })
     .catch(err => { 
       console.error("ERROR", err);
     })

},[]);

  return (
    <section className="character-list">
     {char.map(item => (
       <div key={item.id}>
         <img className="charImg" src={item.image} alt={item.image} />
         <h2>{item.name}</h2>
       </div>
     ))}
    </section>
  );
}
  


