// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginFrom extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    // console.log(response)
    const data = await response.json()
    // console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  userField = () => {
    const {username} = this.state
    return (
      <div className="user-container">
        <label htmlFor="user" className="user-label">
          USERNAME
        </label>
        <input
          id="user"
          type="text"
          value={username}
          placeholder="Username"
          className="user-field"
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  PasswordField = () => {
    const {password} = this.state
    return (
      <div className="password-container">
        <label htmlFor="password" className="password-label">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Password"
          className="password-field"
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-logo"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="form-logo"
          />
          <div className="inputContainer">{this.userField()}</div>
          <div className="inputContainer">{this.PasswordField()}</div>
          <button type="submit" className="login">
            Login
          </button>
          {showSubmitError && <p className="error">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginFrom
