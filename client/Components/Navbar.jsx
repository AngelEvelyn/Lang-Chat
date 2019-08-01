import React, { useContext } from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Context from '../Context';

function Navbar() {
  const { currentUser } = useContext(Context);
  let userId = currentUser;
  let userProfile;
  if (userId){
    userProfile = '/profile/' + userId;
  }  else {
    userProfile = '/home';
    setAuthModal(true);
  }
    return (
      <NavbarStyled>
        <NavLink to='/'>Home</NavLink>
        <NavLink to={userProfile}>Profile</NavLink>
        <button>Sign In / Sign Up</button>
      </NavbarStyled>
    );
  }

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 3%;
  border-style: solid;
  border-width: 5px;
  border-color: black;
`

export default Navbar;