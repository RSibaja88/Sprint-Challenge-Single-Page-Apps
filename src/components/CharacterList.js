import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    Axios
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
      <CharacterCard key ={item.id} item={item}/>
     ))}
    </section>
  );
}
  


