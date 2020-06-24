import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SearchForm = () => (
  <Form className="col-lg-20" id="searchForm">
    <div className="form-group col-lg-10 col-lg-offset-4">
      <h3 className='searchbarHeader'>Find your landlord</h3>
      <div className="input-group input-group-lg center-block">
        <Form.Control
          as="select"
          className="col-sm-3"
          id="inlineFormCustomSelect"
          custom
        >
          <option value="0">Choose...</option>
          <option value="1">Landlord</option>
          <option value="2">Property</option>
        </Form.Control>
        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-dark">Search</Button>
      </div>
    </div>
  </Form>
)

export default SearchForm
