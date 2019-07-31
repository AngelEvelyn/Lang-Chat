import React, { useContext } from 'react';
import { Context } from '../Context.jsx';
import styled from 'styled-components';

function Filter({ languages }) {
  const { dispatch } = useContext(Context)
  const Languages = languages.map(lang => {
    return <option key={lang} value={lang}>{lang}</option>
  })
  return (
    <FilterStyled>
      <label htmlFor="level">Level:</label>
      <select id="level" onChange={(e) => dispatch({ type: 'CHANGE_FILTER_LEVEL', payload: e.target.value })}>
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="fluent">fluent</option>
      </select>

      <label htmlFor="language"> Language:</label>
      <select id="language" onChange={(e) => dispatch({ type: 'CHANGE_FILTER_LANG', payload: e.target.value })}>
        {Languages}
      </select>
    </FilterStyled >
  )
}

const FilterStyled = styled.div`
  
`

export default Filter;