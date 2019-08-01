import React from 'react';
import styled from 'styled-components';


function ProfilePageForm({
 profileId, updateField, updateLanguageField, submitUpdates 
}) {
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
        <label htmlFor="fluent">Fluent:</label><br></br>
        <input type="text" id="fluent" onChange={(e) => { updateLanguageField(e); }}></input><br></br>
        <label htmlFor="intermediate">Intermediate:</label><br></br>
        <input type="text" id="intermediate" onChange={(e) => { updateLanguageField(e); }}></input><br></br>
        <label htmlFor="beginner" >Beginner:</label><br></br>
        <input type="text" id="beginner" onChange={(e) => { updateLanguageField(e); }}></input><br></br>
        <input id="profile-form-submit" onSubmit={(e) => {
          e.preventDefault();
          submitUpdates();
        }} type="submit"></input>
      </form>
    </ProfilePageFormStyled>
  );
}

const ProfilePageFormStyled = styled.div`
   display: flex;`;


export default ProfilePageForm;
