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

const MyProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({ name: 'Nahuel', fluentLang: 'Spanish' })
  const [profiles, setProfiles] = useState([])
  const [filterParams, dispatch] = useReducer(filterReducer, { filteredLang: null, filteredLevel: null })

  return (
    <Context.Provider value={{ currentUser, profiles, filterParams, dispatch }}>
      {props.children}
    </Context.Provider >
  )
}

export default MyProvider;