import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Layout from '../../shared/Layout'

import './Review.scss'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    axios(`${apiUrl}/reviews`)
      .then(res => setReviews(res.data.reviews))
      .catch(console.error)
  }, [])
  const reviewsJsx = reviews.map(review => (
    <div className='reviewBox' key={review.id}>
      <Link to={`/reviews/${review.id}`}>{review.property} <br></br></Link>
      <p>Landlord:{review.landlord} Rating:{review.rating} <img className='starImages' src={`https://cdn2.hubspot.net/hubfs/6816024/Assets/${review.rating}Stars.png`}></img></p>
    </div>
  ))

  return (
    <Layout>
      <h4>Reviews</h4>
      {reviewsJsx}
    </Layout>
  )
}
export default Reviews
