import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2.77778rem;
  align-items: center;
  justify-content: space-evenly;
  margin: 0px;
  background-color: #8484ce;
`;

export const NavItem = styled.li`
  list-style-type: none;
  color: white;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;