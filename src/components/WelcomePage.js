import React from "react";
import styled from "styled-components";

export default function WelcomePage() {
  const Subtitle = styled.div`
  text-align: center;
  font-family: 'Acme', sans-serif;
  font-size: 3rem;
  color: white;
  margin: 5%;
  `;


  return (
    <section className="welcome-page">
      <header>
        <Subtitle>Welcome to the ultimate fan site!</Subtitle>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
