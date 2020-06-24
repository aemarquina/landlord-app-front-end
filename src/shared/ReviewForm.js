import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './ReviewForm.scss'

const ReviewForm = ({ review, handleSubmit, handleChange, cancelPath }) => (
  <div className='reviewFormStyle'>
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
        <Form.Control as="select" name="rating" onChange={handleChange} type='number' value={review.rating}>
          <option>-</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
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

      <Form.Group className='form' controlId="formHorizontal">
        <Form.Label>Description</Form.Label>
        <Form.Control as='textarea'
          placeholder="Please tell us about your experience"
          value={review.description}
          name="description"
          onChange={handleChange}
        />
      </Form.Group>

      <Button className='submitButton' variant='primary' type="submit">Submit</Button>
      <Link to={cancelPath}>
        <Button className='cancelButton' variant='danger'>Cancel</Button>
      </Link>
    </Form>
  </div>
)

export default ReviewForm
