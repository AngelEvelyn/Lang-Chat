import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from '../Context';


function ProfilePageForm({
  profileData, updateField, updateLanguageField, submitUpdates, setEditMode, languageData
}) {
  const { currentUser } = useContext(Context);
  const userProfile = '/profile/' + currentUser.userId;
  console.log('language object data', languageData);
  // let native = languageData.native ? languageData.native.join(', ') : null;
  // let advanced = languageData.advanced ? languageData.advanced.join(', ') : null;
  // let intermediate = languageData.intermediate ? languageData.native.join(', ') : null;
  // let basic = languageData.basic ? languageData.basic.join(', ') : null;
  return (
    <ProfilePageFormStyled>
      <form id="profile-info-form" onSubmit={(e) => {
        e.preventDefault();
        submitUpdates();
      }}>
        <label htmlFor="username">Username:</label><br></br>
        <input type="text" value={profileData.username} id="username" onChange={(e) => { updateField(e); }}></input><br></br>
        <label htmlFor="password" >Password:</label><br></br>
        <input type="text" id="password" onChange={(e) => { updateField(e); }}></input><br></br>
        <label htmlFor="email" >Email:</label><br></br>
        <input type="email" id="email" onChange={(e) => { updateField(e); }}></input><br></br>
        <label htmlFor="aboutMe">About Me:</label><br></br>
        <textarea id="aboutMe" value={profileData.aboutMe} onChange={(e) => { updateField(e); }}></textarea><br></br>
        <br></br>
        <p>Enter you languages for each level (i.e. English, Korean, Chinese)</p><br></br>
        <label htmlFor="native">Native:</label><br></br>
        <input type="text" id="native" value={languageData.native} onChange={(e) => { updateLanguageField(e); }}></input><br></br>
        <label htmlFor="advanced">Advanced:</label><br></br>
        <input type="text" id="advanced" value={languageData.advanced} onChange={(e) => { updateLanguageField(e); }}></input><br></br>
        <label htmlFor="intermediate">Intermediate:</label><br></br>
        <input type="text" id="intermediate" value={languageData.intermediate} onChange={(e) => { updateLanguageField(e); }}></input><br></br>
        <label htmlFor="beginner" >Basic:</label><br></br>
        <input type="text" id="basic" value={languageData.basic} onChange={(e) => { updateLanguageField(e); }}></input><br></br>
        <input id="profile-form-submit" type="submit"></input>
      </form>
      <Link to={userProfile} onClick={() => setEditMode(false)}><h3>Exit Edit Mode</h3></Link>
    </ProfilePageFormStyled>
  );
}

const ProfilePageFormStyled = styled.div`
   display: flex;`;


export default ProfilePageForm;
