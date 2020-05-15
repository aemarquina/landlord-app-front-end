import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Layout from '../../shared/Layout'
import Card from 'react-bootstrap/Card'

import './Reviews.scss'

const Reviews = (prop) => {
  const [reviews, setReviews] = useState([])

  const { msgAlert } = prop
  useEffect(() => {
    axios(`${apiUrl}/reviews`)
      .then(res => setReviews(res.data.reviews))
      .catch(error => {
        msgAlert({
          heading: 'Unable to retrieve reviews: ' + error.message,
          variant: 'danger'
        })
      })
  }, [])
  const reviewsJsx = reviews.map(review => (
    <div className='reviewBox' key={review.id}>
      <Card border='light' style={{ width: '70rem' }}>
        <Card.Header className='propertyLink'><Link to={`/reviews/${review.id}`}>{review.property} <br></br></Link></Card.Header>
        <Card.Title> <h6>Landlord:{review.landlord} <img className='starImages' src={`https://cdn2.hubspot.net/hubfs/6816024/Assets/${review.rating}Stars.png`}></img></h6>
        </Card.Title>
      </Card> <br></br>
    </div>
  ))

  return (
    <Layout>
      {reviewsJsx}
    </Layout>
  )
}
export default Reviews
