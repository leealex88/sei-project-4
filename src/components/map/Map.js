import React from 'react'
import mapboxgl from 'mapbox-gl'
// import axios from 'axios'


mapboxgl.accessToken = process.env.MAPBOX


class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 11.5,
      center: [-0.1, 51.5074]
    })
    this.map.scrollZoom.disable()

    this.props.places.map(point => {
      const el = document.createElement('div')
      el.className = 'marker'
      el.style.backgroundImage = 'url(' + point.image + ')'
      // customise markers based on category here

      return new mapboxgl.Marker(el) // add el inside brackets for custom marker
        .setLngLat({ lat: point.lat, lng: point.lng })
        .addTo(this.map)

        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div>
              <a href="${point.website}"><h1>${point.name}</h1></a>
            </div>
          `))
    })


    this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

  }


  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default Map
