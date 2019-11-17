import styled from 'styled-components';

const Card = styled.div(({width = '100%', height = 'auto', margin = '0px', lg = width, md = lg, sm = md, xs= sm, cursor, hover}) => `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 10px;
  transition: 0.3s;
  width: ${width}
  height: ${height}
  margin: ${margin}
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.19);

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

  &:hover {
    cursor: ${cursor}
    ${hover && 'box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);'}
  }
`);

export default Card;