import React from 'react';
import styled from 'styled-components';

function ProfileCard() {
  return (
    <ProfileCardStyled>
      <div>
        <img src="https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png"></img>
      </div>
    </ProfileCardStyled>
  )
}

const ProfileCardStyled = styled.div`
  display: flex;
  justify-content: flex-start;

  height: 350px;
  width: 200px;
  // padding: 2%;
  margin: 2%;

  border-style: solid;
  border-width: 5px;
  border-color: black;

  div img {
    height: 50px;
    width: 50px;
  }
`

export default ProfileCard;