import React from 'react';
import styled from 'styled-components';

function Filter({ languages }) {
  const Languages = languages.map(lang => {
    return <option key={lang} value={lang}>{lang}</option>
  })
  return (
    <FilterStyled>
      <label htmlFor="level">Level:</label>
      <select id="level">
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="fluent">fluent</option>
      </select>

      <label htmlFor="language">Language:</label>
      <select id="language">
        {Languages}
      </select>
    </FilterStyled>
  )
}

const FilterStyled = styled.div`
  
`

export default Filter;