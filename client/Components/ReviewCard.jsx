import React from 'react';
import styled from 'styled-components';

const ReviewCard = ({ reviewInfo }) => {
  return (
      
        <div id={'conversation-' + reviewInfo.conversationId + '-div'}>
          <ReviewCardStyled>
          <p><b>Name:</b> {' ' + reviewInfo.userId}</p>
          <p><b>Date:</b> {' ' + reviewInfo.date}</p>
          <p><b>Rating:</b> {' ' + reviewInfo.rating}</p>
          <p><b>Level:</b> {' ' + reviewInfo.level}</p>
          <p><b>Language:</b> {' ' + reviewInfo.language}</p>
          <p><b>Comments</b>: {' ' + reviewInfo.review}</p>
          </ReviewCardStyled>
        </div>
  );
}

const ReviewCardStyled = styled.div`
display: flex;
justify-content: space-between;
flex-flow: row wrap;
height: 100px;
width: 600px;
padding: 10px;
align-items: space-evenly;
border: solid 2px black;`

export default ReviewCard;