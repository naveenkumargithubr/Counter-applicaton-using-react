import {Component} from 'react'
import './index.css'
class Counter extends Component {
  onIncrement = () => {
    console.log('increment clicked')
  }
  onDecrement = () => {
    console.log('Decrement cliked')
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">0</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
