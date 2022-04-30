// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
    </div>
    <div className="list-container">
      <ul className="unordered-list-items">
        <li className="list-item">Home</li>
        <li className="list-item">Products</li>
        <li className="list-item">Cart</li>
      </ul>
      <button type="button" className="logout-button">
        LogOut
      </button>
    </div>
  </nav>
)

export default Header
