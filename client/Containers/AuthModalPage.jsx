import React from 'react';
import styled from 'styled-components';
import AuthModalContent from '../Components/AuthModalContent.jsx';


function AuthModalPage({ setAuthModal }) {
  return (
    <Styled>

      <AuthModalContent setAuthModal={setAuthModal} />

    </Styled>
  )
}

const Styled = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s
`

export default AuthModalPage;