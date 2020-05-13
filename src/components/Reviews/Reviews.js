import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Layout from '../../shared/Layout'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    axios(`${apiUrl}/reviews`)
      .then(res => setReviews(res.data.reviews))
      .catch(console.error)
  }, [])
  const reviewsJsx = reviews.map(review => (
    <li key={review.id}>
      <Link to={`/reviews/${review.id}`}>Property:{review.property} <br></br> Landlord:{review.landlord} <br></br> Rating:{review.rating}</Link>
    </li>
  ))
  return (
    <Layout>
      <h4>Reviews</h4>
      <ul>
        {reviewsJsx}
      </ul>
    </Layout>
  )
}
export default Reviews
