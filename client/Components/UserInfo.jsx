import React, { useContext } from 'react';
import { Context } from '../Context.jsx';

function UserInfo() {
  const { currentUser } = useContext(Context);
  return (
    <>
      {currentUser.userId ? <h1>{currentUser.username}</h1> : 'user not logged in..'}
    </>
  );
}
export default UserInfo;
