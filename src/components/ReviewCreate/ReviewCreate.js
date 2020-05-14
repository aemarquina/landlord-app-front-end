import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { reviewCreate } from '../../api/review'

import ReviewForm from '../../shared/ReviewForm'
import Layout from '../../shared/Layout'

const ReviewCreate = (props) => {
  const [review, setReview] = useState({
    property: '',
    rating: '',
    landlord: '',
    movein: '',
    moveout: '',
    description: ''
  })
  const [createdReviewId, setCreatedReviewId] = useState(null)

  const { user, msgAlert } = props

  const handleChange = event => {
    event.persist()
    setReview(review => ({ ...review, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    reviewCreate(review, user)
      .then(res => setCreatedReviewId(res.data.review.id))
      .catch(error => {
        msgAlert({
          heading: 'Unable to create review: ' + error.message,
          variant: 'danger'
        })
      })
  }
  if (createdReviewId) {
    return <Redirect to={`/reviews/${createdReviewId}`} />
  }

  return (
    <Layout>
      <ReviewForm
        review={review}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </Layout>
  )
}

export default ReviewCreate
