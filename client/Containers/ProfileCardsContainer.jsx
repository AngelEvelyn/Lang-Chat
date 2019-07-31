import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProfileCard from '../Components/ProfileCard.jsx';
import styled from 'styled-components';

function ProfileCardsContainer() {
  const [profileCardsInfo, setProfileCardsInfo] = useState([
    { name: 'Nahuel', nativeLanguage: 'Spanish', isOnline: false, languages: ['English'] }
  ])

  useEffect(() => {
    axios.get('googleea.com', {
      params: {
        language: 'english',
        level: 'beginner'
      }
    })
      .then(data => setProfileCardsInfo(data))
      .catch(err => console.log(err))
  }, [])

  const cards = profileCardsInfo.map(profile => {
    return <ProfileCard key={profile.name} profileInfo={profile} />
  })
  return (
    <ProfileCardsContainerStyled>

      {cards}

    </ProfileCardsContainerStyled>
  )
}

const ProfileCardsContainerStyled = styled.div`
 display: flex;
 justify-content: space-evenly;
 flex-flow: row wrap;
`

export default ProfileCardsContainer;