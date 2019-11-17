import React from 'react';
import PetCard from '../../Components/PetCard';
import cometPic from '../../static/images/comet.jpg'
import Container from '../../Components/Container';

const Comet = () => {
  let comet = {
    img: cometPic,
    description: "My name is Comet and I am a Tangerine Milk Snake. This picture was taken a long time ago, back when I was only 3 and 1/2 feet long. I am now up to 5 feet!",
    funFacts: [
      'Like many reptiles, the incubation temperature of their eggs may determine the offsprings\' sex; warmer temperatures usually create males while cool temperatures create females.',
      'These snakes are known for their imitation of the markings and behavior of the venomous coral snake. By such mimicry, they lead potential predators to believe they are dealing with a dangerous animals, and are thus left alone.',
      'Milksnakes use quick, jerky movements so that their bands flash, startling predators. Their bright colors signal danger and often confuse predators, making these snakes hard to follow.',
      'Milksnakes are known for eating other snakes.',
      'They get their name from an old belief that it drinks milk from the udders of cows. This myth probably arose because they were commonly spotted in barns and stables, where there is a concentration of rodents.',
    ]
  }
  return (
    <Container>
      <PetCard pet={comet}></PetCard>
    </Container>
  )
}

export default Comet;