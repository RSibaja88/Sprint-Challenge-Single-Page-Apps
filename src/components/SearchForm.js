import React, { useState, useEffect } from "react";
import styled from "styled-components";


export default function SearchForm(props) {
  const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid balck;
  border-radius: 3px;
`;
const UserInput = styled.input.attrs(props => ({
  type: "search",
  size: props.size || "0.4em",
}))`
  color: black;
  font-size: 1em;
  border: 2px solid black;
  border-radius: 3px;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;


  const [searchInput, setInput] = useState("");
  const [searchResult, setResult] = useState(props.characters);
  

  useEffect(() => {}, [searchInput]);

  

  const handleChanges = event => {
    setInput(event.target.value);
  };

  const handleSubmits = event => {
    event.preventDefault();
    props.SearchArr(searchInput);
  };

 
  return (
    <section className="search-form">
     <form onSubmit={handleSubmits}>
        <UserInput
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChanges}
          value={searchInput}
        />
        <Button type="submit">Submit</Button>
      </form>
      <div>
        <ul>
          {searchResult.map(character => {
            return <li key={character}>{character}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}
