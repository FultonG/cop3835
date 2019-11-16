import styled from 'styled-components';

const Card = styled.div(props => `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 10px;
  width: ${props.width ? props.width: '100%'}
  height: ${props.height ? props.height: '100%'}
  margin: ${props.margin ? props.margin: '0px'}
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`);

export default Card;