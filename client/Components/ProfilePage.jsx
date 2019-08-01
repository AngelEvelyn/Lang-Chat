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
            <p>{aboutMe}</p>
            <div id='profile-language-levels'>
              {levelsDispLay}
            </div>
      </ProfilePageStyled>
    )
  }
  
  const ProfilePageStyled = styled.div`
   display: flex;`


export default ProfilePage;