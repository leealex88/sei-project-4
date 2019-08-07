import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './components/common/Homepage'
import './components/styles/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import PaginationIndex from './components/places/PaginationIndex'
import PlaceDetails from './components/places/PlaceDetails'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>

            <Route path="/pagination" component={PaginationIndex} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Homepage} />
            <Route path="/details" component={PlaceDetails} />

          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
