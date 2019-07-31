import React from 'react';
import styled from 'styled-components';


function ProfilePage(props) {
    const User = <p>{props.profileId}</p>
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