import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom';

export const SidebarElement = styled.div`
  position: fixed;
  z-index: 99;
  width: 300px;
  height: 100%;
  background: rgba(237, 234, 232, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`;

export const NavMenu = styled.ul`
  display: flex;
  padding: 16px;
  flex-direction: column;
  list-style: none;
  text-align: center;
  justify-content: space-between;
  border-radius: 4px;
`;

export const NavItem = styled.li`
  width: 268px;
  height: 50px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const NavLinks = styled(Link)`
  color: #4d2f15;
  display: flex;
  width: 100%;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  text-align: left;
  padding-left: 45px;
  font-size: 16px;

  &:hover {
    color: #f08618;;
  }

  &.active {
    background: #fce7d1;
    color: #f08618;
    font-weight: 600;
    border-radius: 4px;
  }
`;

export const Icons = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 27px;
`;