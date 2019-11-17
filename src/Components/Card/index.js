import styled from 'styled-components';

const Card = styled.div(({width = '100%', height = 'auto', margin = '0px', lg = width, md = width, sm = width, xs= width}) => `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 10px;
  width: ${width}
  height: ${height}
  margin: ${margin}
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media only screen and (max-width: 1200px){
    width: ${lg}
  }

  @media only screen and (max-width: 992px){
    width: ${md}
  }

  @media only screen and (max-width: 768px){
    width: ${sm}
  }

  @media only screen and (max-width: 576px){
    width: ${xs}
  }
`);

export default Card;