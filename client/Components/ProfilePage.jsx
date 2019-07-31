import React from 'react';
import styled from 'styled-components';


function ProfilePage({ profileInfo }) {
    const User = <p>{profileInfo}</p>
    return (
      <ProfilePageStyled>
          <div>
          <p>{User}</p>
          </div>
      </ProfilePageStyled>
    )
  }
  
  const ProfilePageStyled = styled.div`
   display: flex;`


export default ProfilePage;