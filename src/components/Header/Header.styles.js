import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #1a1a1a;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 8px;
`;

export const Title = styled.h1`
  margin: 0 0 15px 0;
  font-size: 2.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &.active {
    background-color: #fff;
    color: #1a1a1a;
  }
`;