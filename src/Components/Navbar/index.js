import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { Nav, NavItem, StyledLink } from './styles';

const Navbar = () => {
  return (
    <Router>
      <Nav>
        <NavItem>
          <StyledLink to='/'>Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/fundy'>Fundy</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/chin-li'>Chin Li</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/lux'>Lux</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/cash'>Cash</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/comet'>Comet</StyledLink>
        </NavItem>
      </Nav>
    </Router>
  )
}

export default Navbar;