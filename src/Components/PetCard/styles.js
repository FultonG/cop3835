import styled from 'styled-components';

export const PetImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 10px 0px 0px 10px;

  @media only screen and (max-width: 768px){
    width: 100%
  }
`;

export const PetDescription = styled.div`
  width: 40%;
  margin: 0% 2%;

  @media only screen and (max-width: 768px){
    width: 100%
  }

`;

export const FunFactListItem = styled.li`
  padding: 10px;
`;
