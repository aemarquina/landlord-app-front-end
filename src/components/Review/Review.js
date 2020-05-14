import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../../shared/Layout'

const Review = (props) => {
  const [review, setReview] = useState(null)
  const [deleted, setDeleted] = useState(false)

  const { user, msgAlert } = props

  useEffect(() => {
    // console.log('this is the logged in user' + user)
    // console.log('this is the created user' + review.user.id)
    axios(`${apiUrl}/reviews/${props.match.params.id}`)
      .then(res => setReview(res.data.review))
      .catch(error => {
        msgAlert({
          heading: 'Unable to retrieve review: ' + error.message,
          variant: 'danger'
        })
      })
  }, [])

  const destroy = () => {
    if (user) {
      axios({
        url: `${apiUrl}/reviews/${props.match.params.id}`,
        method: 'DELETE',
        headers: {
          'Authorization': `Token token=${user.token}`
        }
      })
        .then(() => setDeleted(true))
        .then(() => msgAlert({
          heading: 'deleted Review',
          variant: 'success'
        }))
        .catch(error => {
          this.setState({ email: '', password: '' })
          msgAlert({
            heading: 'Unable to delete review: ' + error.message,
            variant: 'danger'
          })
        })
    }
  }

  if (!review) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/view-reviews', state: { msg: 'Review succesfully deleted!' } }
    } />
  }

  const editDeleteJsx = (
    <Layout>
      <h4>{review.property}</h4>
      <h5>Landlord: {review.landlord}</h5>
      <h5>Rating: {review.rating}</h5>
      <h6>Move In: {review.movein}</h6> <h6>Move Out: {review.moveout}</h6>
      <p>Description: {review.description}</p>
      <Link to="/view-reviews">Back to reviews</Link>
    </Layout>
  )

  if (user === null) {
    return editDeleteJsx
  }

  if (user.id !== review.user.id) {
    return editDeleteJsx
  }

  return (
    <Layout>
      <h4>{review.property}</h4>
      <h5>Landlord: {review.landlord}</h5>
      <h5>Rating: {review.rating}</h5>
      <h6>Move In: {review.movein}</h6> <h6>Move Out: {review.moveout}</h6>
      <p>Description: {review.description}</p>
      <button onClick={destroy}>Delete Book</button>
      <Link to={`/reviews/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to="/view-reviews">Back to reviews</Link>
    </Layout>
  )
}

export default Review
