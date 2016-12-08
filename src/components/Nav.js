import React from 'react'
import { Link } from 'react-router'

import '../../styles/main.css' // temporary css import

// temporary data seed
import '../data/blog.js'

const Nav = (blog) => {
  return (
    <nav>
      <ul id="list-style">
        <li><Link to="/" className="button block-button">Home</Link></li>
        <li><Link to="/about" className="button block-button">About</Link></li>
        <li>
          <div className="dropdown">
            <button className="button dropbtn">Blog</button>
            <div className="dropdown-content">
              <Link to="/blog" className="button dropbtn block-button">Cultural Blog 1a - Reflection</Link>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/c1-time-and-habits-blog.html">Cultural Blog 1b - Time And Habits</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
