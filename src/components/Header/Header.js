import React, {useContext} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HashRouter as Router , Routes ,Route, Link, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../contexts'
import {setAuthToken} from '../../utils'


const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0,0,0,.3);
  padding: 0 32px;
`
const Brand = styled.div`
  font-size: 32px;
  font-weight: bold;
`

const NavBarList = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`
const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  width: 100px;
  cursor:pointer;
  color: black;
  text-decoration: none;

  ${props => props.$active && `
  background: rgba(0,0,0,.1);
  `}
`



const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  ${NavBarList}{
    margin-left: 64px;
  }
`


export default function Header() { 
  const location = useLocation();
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthToken('')
    setUser(null)
    if(location.pathname !== "/"){
      navigate('/')
    }
  }

  return (
    <HeaderContainer>
          {console.log(AuthContext)}
      <LeftContainer>
        <Brand>我的第一個部落格</Brand>
        <NavBarList>
          <Nav $active={location.pathname === "/"} as={Link} to="/" > 首頁</Nav>
          { user && <Nav $active={location.pathname === "/new-post"}  as={Link} to="/new-post">發佈文章 </Nav>}
        </NavBarList>
      </ LeftContainer>
      <NavBarList>
      { !user && <Nav $active={location.pathname === "/login"} as={Link} to="/login">登入</Nav>}
      { user && <Nav onClick={handleLogout} >登出</Nav>}
      </NavBarList>
    </HeaderContainer>
  );
}
