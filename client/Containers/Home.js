import React, { useState } from 'react';
import NavBar from '../Components/Navbar';
import ProfileCardsContainer from './ProfileCardsContainer';
import Filter from '../Components/Filter.jsx'
import UserInfo from '../Components/UserInfo'

function Home() {
  const [languages, setLanguages] = useState(['English', 'Spanish', 'Portuguese', 'Korean', 'Tagalog'])
  const [profileCardsInfo, setProfileCardsInfo] = useState([
    { name: 'Nahuel', NativeLanguage: 'Spanish', Languages: ['English'] }
  ])
  return (
    <div>
      <NavBar />
      <Filter languages={languages} />
      <UserInfo />
      <ProfileCardsContainer />
    </div>
  )
}

export default Home