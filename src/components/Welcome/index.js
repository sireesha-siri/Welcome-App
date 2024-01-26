// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  getButtonStatus = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="welcome-container">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="welcome-description">Thank you! Happy Learning</p>
        <button
          type="button"
          className="button-style"
          onClick={this.getButtonStatus}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
