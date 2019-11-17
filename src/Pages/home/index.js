import React from 'react';
import Container from '../../Components/Container'
import Card from '../../Components/Card';
import { Title, PetContainer, Image } from './styles'
import FundyImg from '../../static/images/fundy.jpg'
import LuxImg from '../../static/images/lux.jpg'

const Home = () => {
  return (
    <Container>
      <Card>
        <Title>Welcome To My Personal Petland</Title>
        <PetContainer>
          <Card width={'15%'} margin={'5px'} xs={'100%'}>
            <Image src={FundyImg}></Image>
            <Title>Fundy</Title>
          </Card>
          <Card width={'15%'} margin={'5px'} xs={'100%'}>
            <Image src={FundyImg}></Image>
            <Title>Chin Li</Title>
          </Card>
          <Card width={'15%'} margin={'5px'} xs={'100%'}>
            <Image src={LuxImg}></Image>
            <Title>Lux</Title>
          </Card>
          <Card width={'15%'} margin={'5px'} xs={'100%'}>
            <Image src={FundyImg}></Image>
            <Title>Cash</Title>
          </Card>
          <Card width={'15%'} margin={'5px'} xs={'100%'}>
            <Image src={FundyImg}></Image>
            <Title>Comet</Title>
          </Card>
        </PetContainer>
      </Card>
    </Container>
  )
}

export default Home;