/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProfileCard from '../Components/ProfileCard';

function ProfileCardsContainer() {
  const [profileCardsInfo, setProfileCardsInfo] = useState([
    {
      name: ['Nahuel'], nativeLanguage: ['Spanish'], isOnline: false, languages: ['English'],
    },
  ]);

  useEffect(() => {
    axios.get('/api/user/getAll', {
      limit: 10,
      offset: 5,
    })
      .then((data) => {
        console.log(data);
        setProfileCardsInfo(data.data.result);
      })
      .catch(err => console.log(err));
  }, []);

  const cards = profileCardsInfo.map(profile => <ProfileCard key={profile.username}
    profileInfo={profile} />);
  return (
    <ProfileCardsContainerStyled>

      {cards}

    </ProfileCardsContainerStyled>
  );
}

const ProfileCardsContainerStyled = styled.div`
 display: flex;
 justify-content: space-evenly;
 flex-flow: row wrap;
`;

export default ProfileCardsContainer;
