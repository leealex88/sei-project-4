import React from 'react'
import { Card } from 'react-bootstrap'




const PlaceIndexCard = ({ id, image, name, city, street, buildingNumber, postcode, type, setCurrentPlace}) => {
  return (
    <div>
      <Card className="singleCard" style={{ width: '18rem', background: 'none' }} data-id={id} onClick={() => setCurrentPlace(id)}>
        <Card.Header data-id={id}>{type.name}</Card.Header>
        <Card.Img data-id={id} className="cardsImage" variant="top"  src={image} />
        <Card.Body data-id={id}>
          <Card.Title data-id={id}>{name}</Card.Title>
          <Card data-id={id} className="address" style={{ background: 'none' }}>{city} {street} {buildingNumber} {postcode}</Card>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PlaceIndexCard

// <Card.Text>
//   {bio}
// </Card.Text>


// add a button with a value of the place id
