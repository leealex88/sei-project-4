import React from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
// import Auth from '../../lib/Auth'


class Register extends React.Component {
  constructor(){
    super()

    this.state = { data: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: ''})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')

    axios.post('api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors}))
  }

  render() {
    console.log(this.state.data)
    return (
      <section className="registerForm">
        <Form onSubmit={this.handleSubmit} >
          <Form.Group controlId="userName">
            <Form.Label>User name</Form.Label>
            <Form.Control
              type="userName"
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email address"
              name="email"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password confirmation"
              name="password_confirmation"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="outline-dark" type="submit">
      Submit
          </Button>
        </Form>
      </section>

    )
  }
}

export default Register
