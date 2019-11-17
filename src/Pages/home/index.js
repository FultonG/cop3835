import React from 'react';
import Container from '../../Components/Container'
import Card from '../../Components/Card';
import { Content, PetContainer, Image } from './styles'
import FundyImg from '../../static/images/fundy.jpg'
import LuxImg from '../../static/images/lux.jpg'
import CashImg from '../../static/images/cash.jpg'
import ChinLiImg from '../../static/images/chin-li.jpg'

const Home = () => {
  let pets = [
    {
      img: FundyImg,
      name: 'Fundy',
      type: 'HedgeHog'
    },
    {
      img: ChinLiImg,
      name: 'Chin Li',
      type: 'Chinchilla'
    },
    {
      img: LuxImg,
      name: 'Lux',
      type: 'Bearded Dragon'
    },
    {
      img: CashImg,
      name: 'Cash',
      type: 'Golden Retriever'
    },
    {
      img: CashImg,
      name: 'Comet',
      type: 'Tangerine Milk Snake'
    }
    
  ]
  return (
    <Container>
      <Card>
        <Content as='h1'>Welcome To My Personal Petland</Content>
        <PetContainer>
          {pets.map(pet => (
            <Card width={'15%'} margin={'5px'} xs={'100%'}>
              <Image src={pet.img}></Image>
              <Content as='h1'>{pet.name}</Content>
              <Content>Type: {pet.type}</Content>
            </Card>
          ))}
        </PetContainer>
      </Card>
    </Container>
  )
}

export default Home;