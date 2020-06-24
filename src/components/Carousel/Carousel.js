import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

import './Carousel.scss'

import SearchForm from '../../shared/SearchForm.js'

const CarouselPage = (props) => {
  const { user } = props
  const CarousalJSX = (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://i.imgur.com/6UBbUMH.jpg?2"
            alt="First slide"
          />
          <Carousel.Caption className='caption'>
            <h1>Welcome to Rate Your Landlord</h1>
            <h4> Here we want to empower renters to make an informed decision before they decide on their big next move
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 h-100"
            src="https://i.imgur.com/H4HqY7a.jpg?2"
            alt="Third slide"
          />

          <Carousel.Caption className='caption'>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://i.imgur.com/zduney0.jpg?2"
            alt="Third slide"
          />

          <Carousel.Caption className='caption'>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
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
            src="https://i.imgur.com/6UBbUMH.jpg?2"
            alt="First slide"
          />
          <Carousel.Caption className='caption'>
            <h4> Here we want to empower renters to make an informed decision before they decide on their big next move
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 h-100"
            src="https://i.imgur.com/H4HqY7a.jpg?2"
            alt="Third slide"
          />

          <Carousel.Caption className='caption'>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://i.imgur.com/zduney0.jpg?2"
            alt="Third slide"
          />
          <Carousel.Caption className='caption'>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <SearchForm>
        </SearchForm>
      </Carousel>
    </Container>
  )
}

export default CarouselPage
