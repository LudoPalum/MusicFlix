import React from 'react';
import { HeaderContainer, Title, Nav, NavLink } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>MUSICFLIX</Title>
      <Nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/adicionar">ADICIONAR VÍDEO</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;