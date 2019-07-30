import React from 'react'
import styled from 'styled-components';


function Navbar() {
  return (
    <NavbarStyled>
      <h5>Home</h5>
      <h5>Sign In / Sign Up</h5>
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