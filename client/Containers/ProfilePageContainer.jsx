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
   const [languageData, setLanguageData] = useState({});
   const userId = currentUser.userId;
   const userPath = '/api/user/get/' + profileId;

   const updateField = (e) => {
    const changeField = e.target.id;
    const updateValue = e.target.value;
    setProfileData(prevProfileData => ({ ...prevProfileData, [changeField]: updateValue }));
    console.log('Profile UpdatedField:', profileData);
  };

  const updateLanguageField = (e) => {
    const changeField = e.target.id;
    const updateValue = e.target.value.split(', ');
    setLanguageData(prevlanguageData => ({ ...prevlanguageData, [changeField]: updateValue }));
    console.log('Profile UpdatedLanguageField:', languageData);
  };

  const submitUpdates = () => {
    axios.post(userPath, { profileData })
    const updateAlert = alert('Updated!');
  };

   useEffect(() => {
    // setProfileData({ userId: userId, username: currentUser.username, pictureURL: 'https://www.instagram.com/p/Bgex-GTB6on/', 
    // aboutMe: "I'm a really smart guy from Argentina. Ask me about Promises."});
    // setLanguageData({native: ['Spanish', 'Spanglish'], advanced: ['English', 'Pig Latin'], basic: ['Japanese']}); 
    axios.get(userPath, {
      userId: profileId,
    })
      .then(data => {
        console.log('User Profile Data', data.data.result);
        setProfileData(data.data.result.user);
        setLanguageData(data.data.result.user.languageArray);
      })
      .catch(err => console.log(err))
  }, [])
  
  console.log(editMode);
    return (
      <ProfilePageContainerStyled>
          <div>
            {profileId == userId && editMode == false ? (
              <button onClick={() => {
                setEditMode(true);
              }}>EDIT</button>
              ) : (
            null
            )}
            
            {editMode == false ? (
              <ProfilePage profileData={profileData} languageData={languageData}/>
            ) : (
              <ProfilePageForm profileData={profileData} languageData={languageData} 
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