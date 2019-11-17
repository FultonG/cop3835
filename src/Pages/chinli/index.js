import React from 'react';
import PetCard from '../../Components/PetCard';
import chinliPic from '../../static/images/chin-li.jpg'
import Container from '../../Components/Container';

const ChinLi = () => {
  let chinli = {
    img: chinliPic,
    description: "My name is Chin Li and I am a Chinchilla. This picture was taken for the first christmas with all of my new friends",
    funFacts: [
      'Chinchilla can reach 10 to 14 inches in length. Tail is usually 5 to 6 inches long. On average, chinchilla has between 2 and 3 pounds of weight.',
      'Chinchilla has the thickest fur of all land animals with 50 hairs growing from a single follicle. One square cm of chinchillas skin contains 20,000 hairs.',
      'Not a single parasite can survive in the fur of chinchilla because of its density. Even fleas will die out of suffocation inside the fur.',
      'Just like in other rodents, chinchilla\'s teeth grow continuously. Regular chewing of twigs and sticks leads to wearing of teeth.',
      'Chinchilla is nocturnal animal, active from the dusk to the dawn. Night decreases visibility and provides protection against predators.',
    ]
  }
  return (
    <Container>
      <PetCard pet={chinli}></PetCard>
    </Container>
  )
}

export default ChinLi;