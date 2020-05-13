import React from 'react'
import { Link } from 'react-router-dom'

const ReviewForm = ({ review, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Property Address</label>
    <input
      placeholder="Address"
      value={review.property}
      name="property"
      onChange={handleChange}
    />

    <label>Rating</label>
    <input
      placeholder="Value of 1-5"
      value={review.rating}
      name="rating"
      onChange={handleChange}
    />

    <label>Landlord</label>
    <input
      placeholder="Landlord's Name"
      value={review.landlord}
      name="landlord"
      onChange={handleChange}
    />

    <label>Move-In</label>
    <input className="datepicker"
      placeholder="Date you Moved in"
      value={review.movein}
      name="movein"
      onChange={handleChange}
    />

    <label>Move-Out</label>
    <input
      placeholder="Date you Moved Out"
      value={review.moveout}
      name="moveout"
      onChange={handleChange}
    />

    <label>Description</label>
    <input
      placeholder="Please tell us about your experience"
      value={review.description}
      name="description"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default ReviewForm
