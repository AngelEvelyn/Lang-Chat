import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import ReviewCard from '../Components/ReviewCard.jsx'
import axios from 'axios';

function ReviewContainer({ profileId }) {
  const [reviewsArray, setReviewsArray] = useState([]);
  // const reviewsArray = [{
  //   conversationId: 1,
  //   userId: 'Angel',
  //   rating: '4/5',
  //   language: 'English',
  //   date: '07/26/19',
  //   level: 'Fluent',
  //   length: '30 mintues',
  //   review: 'Nice person to have a conversation with. Love the accent. He played a song in english, so he gets a higher rating for that. One point off because he needs a shave.'
  // }]

  useEffect(() => {
    axios.get('/api/reviews', {
      userId: profileId,
    })
      .then(data => {
        console.log(data)
        setReviewsArray(data.data.result)
      })
      .catch(err => console.log(err))
  }, [])

  const reviews = reviewsArray.map((reviewObj) => {
      return <ReviewCard key={reviewObj.conversationId} reviewInfo={reviewObj}/>
  })
    return (
      <ReviewContainerStyled>
          <div>
            <h2>Reviews</h2>
            {reviews}
          </div>
      </ReviewContainerStyled>
    )
  }
  
  const ReviewContainerStyled = styled.div`
   display: flex;`


export default ReviewContainer;