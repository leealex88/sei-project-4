import React from 'react'
import PlaceIndexCard from './PlaceIndexCard'
import PaginationIndex from './PaginationIndex'

class PlacesIndex extends React.Component {
  constructor() {
    super()

    this.state = { currentPage: 1, itemsPerPage: 6 }

    this.handlePage = this.handlePage.bind(this)

  }


  handlePage(e) {
    this.setState({ currentPage: e.target.textContent })
  }

  render() {
    const sliceStart = ((this.state.currentPage -1) * this.state.itemsPerPage)
    const sliceEnd = this.state.currentPage * this.state.itemsPerPage
    const numberOfPages = Math.ceil(this.props.places.length / this.state.itemsPerPage)
    const pagesArray = Array.from(Array(numberOfPages).keys()).map(x => ++x)

    return (
      <div>
        <div className="cards">
          {this.props.places.slice(sliceStart,sliceEnd).map(place => (
            <PlaceIndexCard
              key={place.id} {...place}
              setCurrentPlace={this.props.setCurrentPlace}
            />
          ))}
        </div>
        <PaginationIndex
          handlePage={this.handlePage}
          pages={pagesArray}
        />
      </div>
    )
  }
}

export default PlacesIndex
