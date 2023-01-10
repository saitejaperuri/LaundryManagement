// Write your JS code here

import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Products extends Component {
  state = {
    topc: 0,
    bottomc: 0,
    woolenc: 0,
    isClicked: false,
    count: 0,
    userError: false,
    user: '',
  }

  onTop = e => {
    this.setState({topc: e.target.value})
  }

  onBottom = e => {
    this.setState({bottomc: e.target.value})
  }

  onWoolen = e => {
    this.setState({woolenc: e.target.value})
  }

  onUser = e => {
    this.setState({user: e.target.value})
  }

  onSubmit = () => {
    const {user, topc} = this.state
    if (user === '') {
      this.setState({userError: true})
    }

    if (user !== '' && topc !== '') {
      this.setState({isClicked: false})
      this.setState(prev => ({count: prev.count + 1}))
    }
  }

  onDone = () => {
    this.setState(prev => ({
      isClicked: !prev.isClicked,
    }))
  }

  renderRequest = () => {
    const {userError} = this.state
    return (
      <div className="products-container">
        <div className="input">
          <label htmlFor="date">Pickup date</label>
          <input type="date" className="input-cont" id="date" />
        </div>
        <div className="input">
          <label htmlFor="user">User Name</label>
          <input
            type="text"
            id="user"
            className="input-cont"
            onChange={this.onUser}
            placeholder="Name"
          />
        </div>

        <div className="input">
          <label htmlFor="top">Top wear</label>
          <input
            type="number"
            className="input-cont"
            id="top"
            placeholder="0"
            onChange={this.onTop}
          />
        </div>
        <div className="input">
          <label htmlFor="bottom">Bottom wear</label>
          <input
            type="number"
            className="input-cont"
            id="bottom"
            placeholder="0"
            onChange={this.onBottom}
          />
        </div>
        <div className="input">
          <label htmlFor="woo">Woolen Cloth</label>
          <input
            type="number"
            className="input-cont"
            id="woo"
            placeholder="0"
            onChange={this.onWoolen}
          />
        </div>
        <button type="button" className="submit-btn" onClick={this.onSubmit}>
          Submit
        </button>
        {userError ? <p>Fill required fields</p> : ''}
      </div>
    )
  }

  renderStatus = () => {
    const {count, topc, bottomc, woolenc} = this.state
    return (
      <div className="main-sts-con">
        <h1 className="head"> Dash Board</h1>
        <div className="status-container">
          <div className="req-container">
            <h1 className="req-head">Requested</h1>
            <p>{count}</p>
          </div>
          <div className="ord-container">
            <h1 className="req-head">Order Details</h1>
            <p>Top wear {topc}</p>
            <p>Bottom wear {bottomc}</p>
            <p>Woolen wear {woolenc}</p>
          </div>
          <div className="fin-container">
            <h1 className="req-head">Finished</h1>
            <p>0</p>
          </div>
        </div>
        <div className="submit-btn-container">
          <button type="button" className="submit-btn" onClick={this.onDone}>
            Request
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state

    return (
      <div>
        <Header />
        {isClicked ? this.renderRequest() : this.renderStatus()}
      </div>
    )
  }
}

export default Products
