import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  border-radius: 10px;
  width: 100%;
  min-height: 50vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
`;

export const PetImage = styled.img`
  width: 50%;
  height: auto;
`;

export const PetDescription = styled.p`
  width: 40%;
  margin: 5%;
`;