import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Auth from '../../lib/Auth'
import axios from 'axios'

class Login extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange( { target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: ''})
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log('submitting')
    axios.post('api/login', this.state.data)
      .then(res => {
        console.log('token', res.data.token)
        Auth.setToken(res.data.token)
        this.props.history.push('/')
      })
      .catch(() => this.setState( { error: 'Invalid Credentials' }))
  }

  render() {
    return (
      <section className="loginPage">
        <Form onSubmit={this.handleSubmit}>
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


          <Button variant="outline-dark" type="submit">
      Submit
          </Button>
        </Form>
      </section>
    )
  }
}

export default Login
