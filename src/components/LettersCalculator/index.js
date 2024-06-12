// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  change = event => {
    const userInput = event.target.value
    this.setState({inputPhrase: userInput})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-section">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <form className="form-container">
              <label htmlFor="inputletters" className="label">
                Enter the phase
              </label>
              <input
                type="text"
                id="inputletters"
                className="letters-input"
                placeholder="Enter the phase"
                onChange={this.change}
              />
            </form>

            <p className="letters-count">No.of letters: {inputPhrase.length}</p>
          </div>
          <div className="image-section">
            <img
              alt="letters calculator"
              className="letters-calculator-image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
