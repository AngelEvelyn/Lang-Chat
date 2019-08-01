import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import ProfilePage from '../Components/ProfilePage.jsx';
import ReviewContainer from '../Containers/ReviewContainer.jsx';
import ProfilePageForm from '../Components/ProfilePageForm.jsx';
import { Context } from '../Context';
import axios from 'axios';

function ProfilePageContainer({ match }) {
   const [editMode, setEditMode] = useState(false);
   const [profileId, setProfileId] = useState(match.params.id);
   const { currentUser } = useContext(Context);
   const [profileData, setProfileData] = useState({});
   const userId = currentUser.userId;
   console.log(profileData);

   const updateField = (e) => {
    const changeField = e.target.id;
    const updateValue = e.target.value;
    setProfileData(prevProfileData => ({ ...prevProfileData, [changeField]: updateValue }));
    console.log(profileData);
  };

  const updateLanguageField = (e) => {
    const changeField = e.target.id;
    const updateValue = e.target.value;
    setProfileData(prevProfileData => ({ ...prevProfileData, languages: { [changeField]: updateValue } }));
  };

  const submitUpdates = () => {
    // axios.post('/api/', { profileData })
    // .then(setEditMode(false));
    setEditMode(false);
  };

   useEffect(() => {
    setProfileData({ userId: userId, username: currentUser.username, pictureURL: 'https://www.instagram.com/p/Bgex-GTB6on/', 
    aboutMe: "I'm a really smart guy from Argentina. Ask me about Promises.", 
    languages: {native: ['Spanish'], advanced: ['English'], basic: ['Japanese']}, });
    // axios.get('/api/user', {
    //   userId: profileId,
    // })
    //   .then(data => {
    //     console.log(data)
    //     setProfileData(data.data.result)
    //   })
    //   .catch(err => console.log(err))
  }, [])
  
  console.log(editMode);
    return (
      <ProfilePageContainerStyled>
          <div>
            {profileId == userId && editMode == false ? (
              <button onClick={() => {
                setEditMode(true);
                console.log(editMode);
              }}>EDIT</button>
              ) : (
            null
            )}
            
            {editMode == false ? (
              <ProfilePage profileData={profileData}/>
            ) : (
              <ProfilePageForm profileData={profileData} setProfileData={setProfileData} 
                updateField={updateField} updateLanguageField={updateLanguageField} submitUpdates={submitUpdates} setEditMode={setEditMode}/>
            )}

            <ReviewContainer profileId={profileId}/>
          </div>
      </ProfilePageContainerStyled>
    )
  }
  
  const ProfilePageContainerStyled = styled.div`
   display: flex;`


export default ProfilePageContainer;