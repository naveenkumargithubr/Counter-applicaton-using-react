import {Component} from 'react'
import './index.css'
class Counter extends Component {
  state = {count :0}  //.................................. intialaising the state object
  onIncrement = () => {
  //.......................................................now Update the state Object
    this.setState(prevState => {
      console.log(`previous State value is ${prevState.count}`)
   // now return the changed value
      return {count : prevState.count + 1}
  }
                  
  onDecrement = () => {
    this.setState(prevState => {
      console.log(`previous State value is ${prevState.count}`)
   // now return the changed value
      return {count : prevState.count - 1}
  }

  render() {
    const {count} = this.state //........................object destructuring the state object
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{state}</p>
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
