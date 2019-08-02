import React from 'react';
import styled from 'styled-components';

const ReviewCard = ({ reviewInfo }) => {
  return (
    <ReviewCardStyled>
      <div id={'conversation-' + reviewInfo.conversationId + '-div'}>
        <span>
          <p><b>User ID:</b> {' ' + reviewInfo.giverId + ' '}</p>
          <p><b>Date:</b> {' ' + reviewInfo.date}</p>
        </span>
        <span>
          <p><b>Rating:</b> {' ' + reviewInfo.rating + '/5'}</p>
          <p><b>Level:</b> {' ' + reviewInfo.reportedLevel}</p>
        </span>
        <p><b>Comments</b>: {' ' + reviewInfo.score}</p>
      </div>
    </ReviewCardStyled>
  );
}

const ReviewCardStyled = styled.div`
display: flex;
justify-content: space-between;
height: auto;
width: 600px;
padding: 10px;
align-items: space-evenly;
border: solid 2px black;

div span {
  display: flex;
  justify-content: space-between;
  width: 100%
}

`

export default ReviewCard;