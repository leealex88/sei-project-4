import React from 'react'
import {  Card, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

class Footer extends React.Component {


  render() {
    return(
      <section>
        <Card className="footer" border="dark">
          <Card.Body>
            <Card.Text>
            Quiet Place by Ola
            </Card.Text>
            <Button variant="outline-dark">
              GitHub
            </Button>

          </Card.Body>
        </Card>
      </section>
    )
  }
}

export default Footer
