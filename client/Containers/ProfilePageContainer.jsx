import React, { useState } from 'react';
import styled from 'styled-components';
import ProfilePage from '../Components/ProfilePage.jsx'
import ReviewContainer from '../Containers/ReviewContainer.jsx'

function ProfilePageContainer() {
   const [editMode, setEditMode] = useState([false])

    return (
      <ProfilePageContainerStyled>
          <div>
            <button onClick={() => {console.log('click!')}}>EDIT</button>
            <ProfilePage />
            <ReviewContainer />
          </div>
      </ProfilePageContainerStyled>
    )
  }
  
  const ProfilePageContainerStyled = styled.div`
   display: flex;`


export default ProfilePageContainer;