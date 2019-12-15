import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";



export default function CharacterList() {
  const [char, setChar] = useState([]);
  

  

  const updateSearchArr = search => {
    const items = char.filter(res =>
      res.name.toLowerCase().includes(search.toLowerCase())
      );
      setChar(items);
  };


  useEffect(() => {
    Axios
     .get("https://rickandmortyapi.com/api/character/")
     .then(response => {
       console.log("API response: ", response.data.results)
       setChar(response.data.results)
     })
     .catch(err => { 
       console.error("ERROR", err)
     })

  },[]);

  return (
    <section className="character-list">
    <h1>CHARACTER LIST:</h1>
        <SearchForm characters={char} 
          SearchArr={updateSearchArr}
        />
      {char.map(item => {
        return <CharacterCard key={item.id} item={item} />;
      })}
    </section>
  );
}
  


