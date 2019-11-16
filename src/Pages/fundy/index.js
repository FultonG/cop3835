import React from 'react';
import PetCard from '../../Components/PetCard';
import fundyPic from '../../static/images/fundy.jpg'
import { Container } from './styles';

const Fundy = () => {
  let fundy = {
    img: fundyPic,
    description: "My name is fundy. I am a very angry hedgehog"
  }
  return (
    <Container>
      <PetCard pet={fundy}></PetCard>
    </Container>
  )
}

export default Fundy;