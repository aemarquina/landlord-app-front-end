import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import ReviewCreate from '../ReviewCreate/ReviewCreate'
import Reviews from '../Reviews/Reviews'
import Review from '../Review/Review'
import ReviewEdit from '../ReviewEdit/ReviewEdit'
import Carousel from 'react-bootstrap/Carousel'
// import SearchBar from '../SearchBar/SearchBar'
// import UnauthReview from '../UnauthReview/UnauthReview'
// import { router } from 'sw-toolbox';

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="carousel-images"
                    src="https://www.picpedia.org/keyboard/images/landlords.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-images"
                    src="https://live.staticflickr.com/52/180653440_ea048df1f9_b.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel-images"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/create-review' render={() => (
            <ReviewCreate msgAlert={this.msgAlert} user={user} />
          )} />
          <Route path='/view-reviews' user={user} render={() => (
            <Reviews msgAlert={this.msgAlert} />
          )} />
          <Route path='/reviews/:id' user={user} render={({ match }) => (
            <Review msgAlert={this.msgAlert} user={user} match={match} />
          )} />
          <AuthenticatedRoute path='/reviews/:id/edit' user={user} render={({ match }) => (
            <ReviewEdit msgAlert={this.msgAlert} user={user} match={match} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
