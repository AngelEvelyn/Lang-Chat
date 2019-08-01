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
  margin-top: 20px;
  margin-bottom: 20px;

  select {
    margin: 10px;
    width: 150px;
    padding: 5px 35px 5px 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    height: 34px;
    // -webkit-appearance: none;
    // -moz-appearance: none;
    // appearance: none;
    // background: url(http://www.stackoverflow.com/favicon.ico) 96% / 15% no-repeat #eee;
  }

  label {
    margin: 20px;
    font-size: 1.25em;
  }
`

export default Filter;