import React from 'react';
import Card from '../Card';
import { PetImage, PetDescription, FunFactListItem } from './styles';

const PetCard = (props) => {
  return(
    <Card>
      <PetImage src={props.pet.img}></PetImage>
      <PetDescription>
        <p>{props.pet.description}</p>
        <p>Here are some fun facts about my species</p>
        <ol>
          {props.pet.funFacts.map((fact, index) => (
            <FunFactListItem key={index}>{fact}</FunFactListItem>
          ))}
        </ol>
      </PetDescription>
      
    </Card>
  )
}

export default PetCard;