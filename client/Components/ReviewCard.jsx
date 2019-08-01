import React from 'react';
import styled from 'styled-components';

const ReviewCard = ({ reviewInfo }) => {
  return (
    <ReviewCardStyled>
      <div id={'conversation-' + reviewInfo.conversationId + '-div'}>
        <span>
          <p><b>Name:</b> {' ' + reviewInfo.userId}</p>
          <p><b>Date:</b> {' ' + reviewInfo.date}</p>
          <p><b>Rating:</b> {' ' + reviewInfo.rating}</p>
        </span>
        <span>
          <p><b>Level:</b> {' ' + reviewInfo.level}</p>
          <p><b>Language:</b> {' ' + reviewInfo.language}</p>
          <p><b>Length:</b> {' ' + reviewInfo.length}</p>
        </span>
        <p><b>Comments</b>: {' ' + reviewInfo.review}</p>
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