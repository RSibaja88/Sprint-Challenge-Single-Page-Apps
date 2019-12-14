import React from "react";


export default function CharacterCard(props) {


  return (
    <div className="character-card">
      <Card>
        <CardImg src={props.item.image} />
        <CardData> 
        <div>ID: {props.item.id}</div>
        <div>Name: {props.item.name}</div>
        <div>Gender: {props.item.gender}</div>
        <div>Species: {props.item.species}</div>
        <div>Origin: {props.item.origin.name}</div>
        </CardData>
        <Status>Status: {props.item.status}</Status>
      </Card>
    </div>
  )
};
