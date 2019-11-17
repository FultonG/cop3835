import React from 'react';
import { Nav, NavItem } from './styles';
import  StyledLink  from '../StyledLink'

const Navbar = () => {
  return (
      <Nav>
        <NavItem>
          <StyledLink to='/' color={'white'}>Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/fundy' color={'white'}>Fundy</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/chin-li' color={'white'}>Chin Li</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/lux' color={'white'}>Lux</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/cash' color={'white'}>Cash</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='/comet' color={'white'}>Comet</StyledLink>
        </NavItem>
      </Nav>
  )
}

export default Navbar;