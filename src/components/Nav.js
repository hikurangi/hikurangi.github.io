import React from 'react'
import { Link } from 'react-router'

import '../../styles/main.css' // temporary css import

// temporary data seed
import '../data/blog.js'

const Nav = (props) => {
  return (
    <nav>
      <ul id="list-style">
        <li><Link to="/" className="button block-button">Home</Link></li>
        <li><Link to="/about" className="button block-button">About</Link></li>
        <li>
          <div className="dropdown">
            <button className="button dropbtn">Blog</button>
            <div className="dropdown-content">
              { props.nav }
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
