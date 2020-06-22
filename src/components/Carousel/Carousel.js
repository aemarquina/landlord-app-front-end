import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import './Carousel.scss'

const CarouselPage = (props) => {
  const { user } = props
  const CarousalJSX = (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://i.imgur.com/6UBbUMH.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <h4> hello
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 h-100"
            src="https://i.imgur.com/H4HqY7a.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://i.imgur.com/zduney0.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
  if (user === null) {
    return CarousalJSX
  }
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://i.imgur.com/6UBbUMH.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <h4> hello
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 h-100"
            src="https://i.imgur.com/H4HqY7a.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://i.imgur.com/zduney0.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
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
      </Carousel>
    </Container>
  )
}

export default CarouselPage
