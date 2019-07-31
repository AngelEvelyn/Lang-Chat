import React, { useState } from 'react';
import styled from 'styled-components';
import ProfilePage from '../Components/ProfilePage.jsx'
import ReviewContainer from '../Containers/ReviewContainer.jsx'

function ProfilePageContainer({ match }) {
   const [editMode, setEditMode] = useState([false]);
   const [profileId, setProfileId] = useState([match.params.id]);
   const [profileData, setProfileData] = useState([]);
   const user = 1;

  //  useEffect(() => {
  //   axios.get('/api/user', {
  //     userId: profileId,
  //   })
  //     .then(data => {
  //       console.log(data)
  //       setUserData(data.data.result)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

    return (
      <ProfilePageContainerStyled>
          <div>
            {profileId == user ? (
              <button onClick={() => {
                setEditMode([true]);
                console.log(editMode);
              }}>EDIT</button>
              ) : (
            null
            )}

            {editMode === false ? (
              <ProfilePage profileData={profileData}/>
            ) : (
              <ProfilePageForm profileData={profileData}/>
            )}

            <ReviewContainer />
          </div>
      </ProfilePageContainerStyled>
    )
  }
  
  const ProfilePageContainerStyled = styled.div`
   display: flex;`


export default ProfilePageContainer;