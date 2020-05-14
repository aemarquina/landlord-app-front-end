import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

const ReviewForm = ({ review, handleSubmit, handleChange, cancelPath }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formHorizontal">
      <Form.Label>Property Address</Form.Label>
      <Form.Control
        placeholder="Address"
        value={review.property}
        name="property"
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group controlId="formHorizontal">
      <Form.Label>Rating</Form.Label>
      <Form.Control
        placeholder="Value of 1-5"
        value={review.rating}
        name="rating"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formHorizontal">
      <Form.Label>Landlord</Form.Label>
      <Form.Control
        placeholder="Landlord's Name"
        value={review.landlord}
        name="landlord"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group>
      <Form.Label>Move-In</Form.Label>
      <Form.Control type='date'
        placeholder="Date you Moved in"
        value={review.movein}
        name="movein"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formHorizontal">
      <Form.Label>Move-Out</Form.Label>
      <Form.Control type='date'
        placeholder="Date you Moved Out"
        value={review.moveout}
        name="moveout"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formHorizontal">
      <Form.Label>Description</Form.Label>
      <Form.Control
        placeholder="Please tell us about your experience"
        value={review.description}
        name="description"
        onChange={handleChange}
      />
    </Form.Group>

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </Form>
)

export default ReviewForm
