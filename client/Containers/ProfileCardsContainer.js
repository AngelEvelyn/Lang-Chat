import React from 'react';
import ProfileCard from '../Components/ProfileCard';

import styled from 'styled-components';


function ProfileCardsContainer() {
  return (
    <ProfileCardsContainerStyled>

      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />

    </ProfileCardsContainerStyled>
  )
}

const ProfileCardsContainerStyled = styled.div`
 display: flex;
 justify-content: space-evenly;
 flex-flow: row wrap;
`

export default ProfileCardsContainer;