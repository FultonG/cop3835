import React from 'react';
import { Card, PetImage, PetDescription } from './styles';

const PetCard = (props) => {
  return(
    <Card>
      <PetImage src={props.pet.img}></PetImage>
      <PetDescription>{props.pet.description}</PetDescription>
    </Card>
  )
}

export default PetCard;