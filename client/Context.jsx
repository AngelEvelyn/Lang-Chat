import React, { useState, useReducer } from 'react';

export const Context = React.createContext({})

const filterReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FILTER_LANG":
      return { ...state, filteredLang: action.payload };
    case "CHANGE_FILTER_LEVEL":
      return { ...state, filteredLevel: action.payload };
  }
}

const currentUserReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURR_USER":
      return { ...action.payload };
    case "SIGN_OUT":
      return { userId: null, username: null }
  }
}

const MyProvider = (props) => {
  const [currentUser, dispatchCurrUser] = useReducer(currentUserReducer, { userId: null, username: null })
  const [profiles, setProfiles] = useState([])
  const [filterParams, dispatch] = useReducer(filterReducer, { filteredLang: null, filteredLevel: null })

  return (
    <Context.Provider value={{ profiles, filterParams, dispatch, currentUser, dispatchCurrUser }}>
      {props.children}
    </Context.Provider >
  )
}

export default MyProvider;