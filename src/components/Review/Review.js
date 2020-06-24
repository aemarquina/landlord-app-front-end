import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../../shared/Layout'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './Review.scss'

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
      <div>
        <Card>
          <Card.Header>{review.property}</Card.Header>
          <Card.Body>
            <Card.Title>Landlord: {review.landlord}</Card.Title>
            <img className='starImages' src={`https://cdn2.hubspot.net/hubfs/6816024/Assets/${review.rating}Stars.png`}></img>
            <h6>Move In: {review.movein}</h6> <h6>Move Out: {review.moveout}</h6>
            <Card.Text>Description: {review.description}</Card.Text>
            <Link to="/view-reviews">
              <Button variant="secondary">Back to Reviews</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
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
      <div>
        <Card>
          <Card.Header>{review.property}</Card.Header>
          <Card.Body>
            <Card.Title>Landlord: {review.landlord}</Card.Title>
            <img className='starImages' src={`https://cdn2.hubspot.net/hubfs/6816024/Assets/${review.rating}Stars.png`}></img>
            <h6>Move In: {review.movein}</h6> <h6>Move Out: {review.moveout}</h6>
            <Card.Text>Description: {review.description}</Card.Text>
            <Button className='destroyButton' variant="danger" onClick={destroy}>Delete Review</Button>
            <Link to={`/reviews/${props.match.params.id}/edit`}>
              <Button className='backToReviewButton' variant="primary">Edit</Button>
            </Link>
            <Link to="/view-reviews">
              <Button variant="secondary">Back to Reviews</Button>
            </Link>
          </Card.Body>
        </Card> <br></br>
      </div>
    </Layout>
  )
}

export default Review
