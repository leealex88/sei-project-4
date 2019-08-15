import React from 'react'
import axios from 'axios'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'
import PlacesIndex from '../places/PlacesIndex'
import Map from '../map/Map'
import PlaceDetails from '../places/PlaceDetails'
import NavbarMain from '../common/NavbarMain'
import PlaceNew from '../places/PlaceNew'
import Footer from './Footer'


class Homepage extends React.Component {
  constructor() {
    super()

    this.state = {
      currentPlaceId: null

    }
    this.getPlaces = this.getPlaces.bind(this)
    this.setCurrentPlace = this.setCurrentPlace.bind(this)
  }

  componentDidMount() {
    this.getPlaces()
  }

  getPlaces() {
    axios.get('/api/qplaces')
      .then(res => {
        console.log('getPlaces', res.data)
        this.setState({ qplaces: res.data })
      })
      .catch(err => console.log(err))
  }

  setCurrentPlace(id) {
    console.log(id)
    this.setState({ currentPlaceId: id }, () => goToAnchor('sectionThree', false))


    // write function that takes the value of the button and sets it in state as currentPlaceId -- hint: use e (event)
  }

  render(){
    if (!this.state.qplaces) return null
    return (


      <div className="fullPage">
        <section className="sectionOne">
          <NavbarMain />
          <h1 className="titel">Quiet Place</h1>
        </section>
        <section className="sectionTwo">
          <PlacesIndex
            places={this.state.qplaces}
            setCurrentPlace={this.setCurrentPlace}
          />
        </section>
        {this.state.currentPlaceId &&
          <ScrollableAnchor id="sectionThree">
            <section className="sectionThree">
              <PlaceDetails place={this.state.qplaces.filter(place => place.id === parseInt(this.state.currentPlaceId))[0]} />
            </section>
          </ScrollableAnchor>
        }
        <section id="map" className="sectionFour">
          <Map places={this.state.qplaces} />
        </section>
        <section className="sectionFive">
          <PlaceNew
            places={this.state.qplaces}
            getPlaces={this.getPlaces}
          />
        </section>
        <Footer />
      </div>

    )
  }
}

export default Homepage
