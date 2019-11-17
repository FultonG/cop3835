import React from 'react';
import PetCard from '../../Components/PetCard';
import cashPic from '../../static/images/cash.jpg'
import Container from '../../Components/Container';

const Cash = () => {
  let cash = {
    img: cashPic,
    description: "My name is Cash and I am a Golden Retriever. This picture was taken for the first christmas with all of my new friends",
    funFacts: [
      'Golden Retrievers instinctively love to swim. They\'re always up for a game of fetch in the lake or in our case the ocean!',
      'Golden Retrievers are often used on search and rescue teams because of their keen sense of smell and tracking abilities.',
      'Dudley Coutts Marjoribanks,also known as Lord Tweedmouth, developed the breed in Scotland during the late 19th century',
      'They have water-repellent double coats that shed seasonally. (Brush your Golden once a week to minimize the shedding!)',
      'They are known to take care of other animals, even cats.',
    ]
  }
  return (
    <Container>
      <PetCard pet={cash}></PetCard>
    </Container>
  )
}

export default Cash;