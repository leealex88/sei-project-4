import React from 'react'
import { Form, Button, Col, Line } from 'react-bootstrap'

const PlaceForm = ({ data, handleChange, handleSubmit }) => (

  <Form  className="newPlace" onSubmit={handleSubmit}>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Name of the Place</Form.Label>
        <Form.Control
          placeholder="e.g. The British Library"
          type="name"
          name="name"
          onChange={handleChange}
          value={data.name || ''}
        />
      </Form.Group>
      <Form.Group as={Line} className="radios">
        <Form.Label as="legend" column sm={2}>
        Type
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            type="radio"
            label="Library"
            value="1"
            name="type_id"
            id="formHorizontalRadios"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Coffee Shop"
            value="2"
            name="type_id"
            id="formHorizontalRadios"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Work Space"
            value="3"
            name="type_id"
            id="formHorizontalRadios"
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Coffee & More"
            value="4"
            name="type_id"
            id="formHorizontalRadios"
            onChange={handleChange}
          />
        </Col>
      </Form.Group>


      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control
          placeholder="Link to the image"
          type="text"
          name="image"
          onChange={handleChange}
          value={data.image || ''}

        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Website</Form.Label>
        <Form.Control
          placeholder="Link to the page"
          type="text"
          name="website"
          onChange={handleChange}
          value={data.website || ''}
        />
      </Form.Group>

    </Form.Row>


    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Bio</Form.Label>
      <Form.Control as="textarea" rows="5"
        placeholder="Describe the place"
        type="text"
        name="bio"
        onChange={handleChange}
        value={data.bio || ''}
      />
    </Form.Group>

    <Form.Group controlId="formGridAddress2">
      <Form.Label>Street Name</Form.Label>
      <Form.Control placeholder="e.g. Euston Road"
        type="text"
        name="street"
        onChange={handleChange}
        value={data.street || ''} />
    </Form.Group>

    <Form.Group controlId="formGridAddress2">
      <Form.Label>Building Number</Form.Label>
      <Form.Control placeholder="e.g. 96"
        type="number"
        name="buildingNumber"
        onChange={handleChange}
        value={data.buildingNumber || ''}
      />
    </Form.Group>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          placeholder="e.g. London"
          type="text"
          name="city"
          onChange={handleChange}
          value={data.city || ''}
        />
      </Form.Group>

      <Form.Group  as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control
          placeholder="e.g. NW1 2DB"
          type="text"
          name="postcode"
          onChange={handleChange}
          value={data.postcode || ''}
        />
      </Form.Group>

    </Form.Row>

    <Button type="submit" variant="outline-dark">Submit</Button>
  </Form>
)

export default PlaceForm
