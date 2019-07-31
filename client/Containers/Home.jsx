import React, { useState } from 'react';
import axios from 'axios';

import ProfileCardsContainer from './ProfileCardsContainer.jsx';
import Filter from '../Components/Filter.jsx'
import UserInfo from '../Components/UserInfo.jsx'

function Home() {
  const [languages, setLanguages] = useState(['English', 'Spanish', 'Portuguese', 'Korean', 'Tagalog'])


  return (
    <div>
      <Filter languages={languages} />
      <UserInfo />
      <ProfileCardsContainer />
    </div>
  )
}

export default Home