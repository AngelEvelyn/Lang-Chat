import React, { useContext } from 'react';
import { Context } from '../Context.jsx';

function UserInfo() {
  const { currentUser } = useContext(Context)
  return (
    <h1>{currentUser.name}</h1>
  );
}
export default UserInfo