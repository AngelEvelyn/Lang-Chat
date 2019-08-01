import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from '../Context';


function ProfilePageForm({
  updateField, updateLanguageField, submitUpdates, setEditMode
}) {
  const { currentUser } = useContext(Context);
  const userProfile = '/profile/' + currentUser.userId;
  return (
    <ProfilePageFormStyled>
      <form id="profile-info-form">
        <label htmlFor="username">Username:</label><br></br>
        <input type="text" id="username" onChange={(e) => { updateField(e); }}></input><br></br>
        <label htmlFor="password" >Password:</label><br></br>
        <input type="text" id="password" onChange={(e) => { updateField(e); }}></input><br></br>
        <label htmlFor="email" >Email:</label><br></br>
        <input type="email" id="email" onChange={(e) => { updateField(e); }}></input><br></br>
        <label htmlFor="aboutMe">About Me:</label><br></br>
        <textarea id="aboutMe" onChange={(e) => { updateField(e); }}></textarea><br></br>
        <br></br>
        <p>Enter you languages for each level (i.e. English, Korean, Chinese)</p><br></br>
        <label htmlFor="native">Native:</label><br></br>
        <input type="text" id="native" onChange={(e) => { updateLanguageField(e); }}></input><br></br>
        <label htmlFor="advanced">Advanced:</label><br></br>
        <input type="text" id="advanced" onChange={(e) => { updateLanguageField(e); }}></input><br></br>
        <label htmlFor="intermediate">Intermediate:</label><br></br>
        <input type="text" id="intermediate" onChange={(e) => { updateLanguageField(e); }}></input><br></br>
        <label htmlFor="beginner" >Basic:</label><br></br>
        <input type="text" id="basic" onChange={(e) => { updateLanguageField(e); }}></input><br></br>
        <input id="profile-form-submit" onSubmit={(e) => {
          e.preventDefault();
          submitUpdates();
        }} type="submit"></input>
      </form>
      <Link to={userProfile} onClick={() => setEditMode(false)}><h3> Back to Profile </h3></Link>
    </ProfilePageFormStyled>
  );
}

const ProfilePageFormStyled = styled.div`
   display: flex;`;


export default ProfilePageForm;
