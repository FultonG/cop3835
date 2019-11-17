import React from 'react';
import Container from '../../Components/Container'
import Card from '../../Components/Card';
import { Content, PetContainer, Image } from './styles'


const Home = (props) => {
  function handleCardClick(link){
    props.history.push(link)
  }
  return (
    <Container>
      <Card>
        <Content as='h1'>Welcome To My Personal Petland</Content>
        <Content>Here are some of the lovely little creatures that I look after every day, click on any of the cards to find out more information about each animal</Content>
        <PetContainer>
          {props.pets.map(pet => (
            <Card width={'15%'} margin={'5px'} sm={'100%'} md={'45%'} key={pet.id} cursor={'pointer'} hover onClick={() => handleCardClick(pet.link)}>
              <Image src={pet.img}></Image>
              <Content as='h1'>{pet.name}</Content>
              <Content>{pet.type}</Content>
            </Card>
          ))}
        </PetContainer>
      </Card>
    </Container>
  )
}

export default Home;