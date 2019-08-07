import React from 'react'
import axios from 'axios'
import PlaceForm from './PlaceForm'
import Auth from '../../lib/Auth'


class PlaceNew extends React.Component {
  constructor(){
    super()

    this.state = { data: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    console.log(this.getPlaces)
  }


  handleChange(e) {
    const val = e.target.type === 'radio' || e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    const data = { ...this.state.data, [e.target.name]: val }
    this.setState({ data, error: '' })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitting', this.state.data)
    axios.post('/api/qplaces', this.state.data, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.props.getPlaces())
      .catch(err => console.log(err.response))
  }



  render() {

    console.log('render', this.state.data)
    return (
      <div>
        <PlaceForm
          data={this.state.data}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default PlaceNew
