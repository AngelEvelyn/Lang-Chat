import React, { useContext } from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Context from '../Context';

function Navbar({ setAuthModal }) {
  const { currentUser, dispatchCurrUser } = useContext(Context)
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
        {currentUser.username ? <img src="https://png.pngtree.com/svg/20160428/d5fa73439c.png" onClick={() => dispatchCurrUser({ type: 'SIGN_OUT' })} /> :
        <button onClick={() => setAuthModal(true)}><h3>Sign In / Sign Up</h3></button>}
      </NavbarStyled>
    );
  }

const NavbarStyled = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0px 3%;
  border-style: solid;
  border-width: 5px;
  border-color: black;

  img {
    height: 50px;
    width: 50px;
  }

  img:hover {
    cursor: pointer;
  }
`

export default Navbar;