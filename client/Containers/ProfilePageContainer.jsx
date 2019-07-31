import React, { useState } from 'react';
import styled from 'styled-components';
import ProfilePage from '../Components/ProfilePage.jsx'
import ReviewContainer from '../Containers/ReviewContainer.jsx'

function ProfilePageContainer({ match }) {
   const [editMode, setEditMode] = useState([false])
   const userId = 1;
   const User = match.params.id
    return (
      <ProfilePageContainerStyled>
          <div>
            {User === userId ?
              (<button onClick={() => {console.log('click!')}}>EDIT</button>)
            : null}
            <ProfilePage profileId={User}/>
            <ReviewContainer />
          </div>
      </ProfilePageContainerStyled>
    )
  }
  
  const ProfilePageContainerStyled = styled.div`
   display: flex;`


export default ProfilePageContainer;