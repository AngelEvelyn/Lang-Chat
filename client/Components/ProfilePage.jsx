import React from 'react';
import styled from 'styled-components';


function ProfilePage({ profileData, profileId }) {
    const username = profileData.username;
    const profilePicURL = profileData.pictureURL;
    const aboutMe = profileData.aboutMe;
    const languages = profileData.languages;
    const levelsDispLay = [];
    for(let level in languages){
        levelsDispLay.push(<p>{level.toUpperCase()}:{' '}{languages[level].join(',')}</p>);
    }


    return (
      <ProfilePageStyled>
            <h1>{username}</h1>
            <img href={profilePicURL} alt="Profile picture"></img>
            <p>About Me: {' '}{aboutMe}</p>
            <button>Connect</button>
            <div id='profile-language-levels'>
              {levelsDispLay}
            </div>
      </ProfilePageStyled>
    )
  }
  
  const ProfilePageStyled = styled.div`
   display: flex;
   flex-direction: column;
   div img: {
     border: solid 2px blue;
     height: 300px;
     width: 200px;
   }
   div button: {
    margin: 10px 0px;
    border: none;
    border-radius: 8px;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 150px;
    font-size: 18px;
   }
   `


export default ProfilePage;