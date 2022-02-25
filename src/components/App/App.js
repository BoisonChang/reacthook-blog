import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HashRouter as Router , Routes ,Route, Link} from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage'
import HomePage from '../../pages/HomePage/HomePage'
import Header from '../Header/Header'
import {AuthContext} from '../../contexts'
import { getMe } from '../../WebAPI'


const Root = styled.div`
  padding-top: 64px;
`

function App() { 
  const [user, setUser] =useState(null)

  useEffect(() =>{
    getMe().then(response => {
      console.log(response)
      if(response.ok){
        setUser(response.data)
      }
    })

  }, [])

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <Root>
      <Router>
      <Header>
        header
      </Header>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route></Route>
      </Routes>
      </Router>
      </Root>
    </AuthContext.Provider>
  );
}

export default App;