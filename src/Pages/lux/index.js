import React from 'react';
import PetCard from '../../Components/PetCard';
import luxPic from '../../static/images/lux.jpg'
import Container from '../../Components/Container';

const Lux = () => {
  let lux = {
    img: luxPic,
    description: "My name is Lux and I am a bearded dragon. This picture was taken the day I arrived home",
    funFacts: [
      'Bearded dragons are also known by their scientific genus name, Pogona, or specifically for the Inland Bearded Dragon, Pogona vitticeps,  and by their colloquial name, "beardies."',
      'Beardies wave their arms at each other to show species recognition or to demonstrate submission',
      'Bearded dragons can run up to nine miles per hour. But for the most part, they are quite sedentary lizards.',
      'Bearded dragons are one of the most easy-going and relaxed in the reptile world. They are amongst the easiest to leash train, and will even casually allow their owners to dress them in clothing.',
      'Bearded dragons get their name from the spiny projections under their necks that resemble a man’s beard. When they feel threatened or excited, they puff out their beards and open their mouths to make themselves look bigger.',
    ]
  }
  return (
    <Container>
      <PetCard pet={lux}></PetCard>
    </Container>
  )
}

export default Lux;