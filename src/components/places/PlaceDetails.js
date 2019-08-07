import React from 'react'
import { Card, Button } from 'react-bootstrap'
// import axios from 'axios'

class PlaceDetails extends React.Component {
  constructor() {
    super()

    this.state = { qplaces: null }

  }

  render() {
    const { place } = this.props
    if (!place) return null
    return (
      <div className="placeShow">
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{place.name}</Card.Title>
            <Card.Text>
      With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default PlaceDetails
