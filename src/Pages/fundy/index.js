import React from 'react';
import PetCard from '../../Components/PetCard';
import fundyPic from '../../static/images/fundy.jpg'
import Container from '../../Components/Container';

const Fundy = () => {
  let fundy = {
    img: fundyPic,
    description: "My name is fundy and I am an african pygmy hedgehog. This picture was taken for my very first christmas",
    funFacts: [
      'There are some 17 species of hedgehog in 5 general, found through parts of Europe, Asia, and Africa, and in New Zealand by introduction.',
      'Hedgehog’s lifespan is from 3 to 8 years in the wild, up to 10 years in captivity.',
      'Hedgehogs have about 5,000 – 7,000 spines.Each spine lasts about a year then drops out and a replacement grows.',
      'The hedgehog is nocturnal, coming out at night and sleep all day, up to 18 hours!',
      'Hedgehogs are classified as insectivorous (insect eaters) but appear to be very opportunistic eaters in the wild eating a wide variety of insects, mollusks (worms and snails) small animals and vegetation, fruits and greens.',
    ]
  }
  return (
    <Container>
      <PetCard pet={fundy}></PetCard>
    </Container>
  )
}

export default Fundy;