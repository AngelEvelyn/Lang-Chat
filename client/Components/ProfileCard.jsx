import React from 'react';
import styled from 'styled-components';

function ProfileCard({ profileInfo }) {
  return (
    <ProfileCardStyled>
      <div>
        <img src="https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png"></img>
        <h3>{profileInfo.username || 'Test User'}</h3>
        <h5>Native Language: {profileInfo.nativeLanguage}</h5>
        {profileInfo.isOnline ? <h5 id='online-status'>ONLINE!</h5> : <h5 id='offline-status'>offline..</h5>}
        <button disabled={!profileInfo.isOnline} onClick={() => alert('connecting to user..')}>Connect</button>
      </div>
    </ProfileCardStyled>
  )
}

const ProfileCardStyled = styled.div`
display: flex;
justify-content: flex-start;

margin: 10px;

height: 350px;
width: 200px;

// border-style: solid;
// border-width: 3px;
// border-color: black;
border-radius: 5px;
box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.2);

text-align: center;
font-family: arial;

  div h5 {
    margin: 10px 0px;
  }

  div img {
    height: 50%;
    width: 100%;
  }

  div #online-status {
    color: green;
  }

  div #offline-status {
    color: red;
  }

  div button {
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

  div button:hover, a:hover {
  opacity: 0.7;
}

div button:disabled{
  background-color: #cccccc;
  color: #666666;
}


`

export default ProfileCard;