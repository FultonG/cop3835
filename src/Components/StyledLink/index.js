import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(({color = 'black'}) => `
  color: ${color};
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`);

export default StyledLink;