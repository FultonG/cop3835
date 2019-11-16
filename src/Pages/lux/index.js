import React from 'react';
import PetCard from '../../Components/PetCard';
import luxPic from '../../static/images/lux.jpg'
import { Container } from './styles';

const Lux = () => {
  let lux = {
    img: luxPic,
    description: "My name is Lux. I am a very smol dragon"
  }
  return (
    <Container>
      <PetCard pet={lux}></PetCard>
    </Container>
  )
}

export default Lux;