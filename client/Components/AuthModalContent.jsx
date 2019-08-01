import React, { useState } from 'react';
import styled from 'styled-components';

import Login from './Login';
import SignUp from './SignUp';
import Test from './Test';

function AuthModalContent({ setAuthModal }) {
  const [willSignUp, setWillSignUp] = useState(false)
  return (
    <Styled>
      <button onClick={() => setAuthModal(false)}>X</button>
      {willSignUp ? <SignUp setAuthModal={setAuthModal} /> : <Test setAuthModal={setAuthModal} setWillSignUp={setWillSignUp} />}
      {/* <Login setAuthModal={setAuthModal} setWillSignUp={setWillSignUp} /> */}

    </Styled>
  )
}

const Styled = styled.div`
  margin: auto;
  text-align: center;
  background: white;
  width: 50%;
  height: 75%;
`


export default AuthModalContent;