import React from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {
  const Card = styled.div`
  background-color: white;
  width: 80%;
  padding: 10px;
  box-shadow: 1px 1px 5px black;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

const CardImg = styled.img`
  width: 200px;
  height: 200px
  border-radius: 10px;
`;

const CardTitle = styled.div`
 font-family: 'Covered By Your Grace', cursive;
 font-size: 2.15rem;
`;

const CardBox = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
`;

const CardData = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
  font-family: 'Acme', sans-serif;
  font-size: 1.5rem;
`;




return (
<div className="character-card">
  <Card>
    <CardImg src={props.item.image} />
    <CardBox>
    <CardTitle>Name: {props.item.name}</CardTitle>
    <CardData>      
      <div>Gender: {props.item.gender}</div>
      <div>Species: {props.item.species}</div>
      <div>Origin: {props.item.origin.name}</div>
      <div><b>Status: {props.item.status}</b></div>
      </CardData>
      </CardBox>
  </Card>
</div>
)

}

      

