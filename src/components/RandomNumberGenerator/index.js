// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onChaneRandom = () => {
    const ss = Math.ceil(Math.random() * 100)
    this.setState({count: ss})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div>
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.onChaneRandom}>Generate</button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
