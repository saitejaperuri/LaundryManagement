import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'

import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    const {topc} = this.props
    console.log(topc)
    const accessToken = Cookies.get('jwt_token')

    if (accessToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <Header />
        <div className="price-container">
          <div className="head-price">
            <h1>Laundry Price(Per Unit)</h1>
            <div className="price">
              <h3>Top Wear Laundry Price</h3>
              <h3>12</h3>
            </div>
            <div className="price">
              <h3>Bottom Wear Laundry Price</h3>
              <h3>22</h3>
            </div>
            <div className="price">
              <h3>Woolen Laundry Price</h3>
              <h3>20</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
