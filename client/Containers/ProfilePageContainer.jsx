import React from 'react';
import styled from 'styled-components';

function ProfilePageContainer() {
    return (
      <ProfilePageContainerStyled>
          <div>
              A different thing!
          </div>
      </ProfilePageContainerStyled>
    )
  }
  
  const ProfilePageContainerStyled = styled.div`
   display: flex;`


export default ProfilePageContainer;