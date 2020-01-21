import React    from 'react'
import { Link } from 'react-router-dom'
import { blog } from '../data'

const Nav = () => {
  return (
    <nav>
      <ul id="list-style">
        <li><Link to="/" className="button block-button">Home</Link></li>
        <li><Link to="/about" className="button block-button">About</Link></li>
        <li>
          <div className="dropdown">
            <button className="button dropbtn">Blog</button>
            <div className="dropdown-content">
              {
                blog.map((item, index) => {
                  return (
                    <Link key={index} to={"/blog/" + item.slug} className="button dropbtn block-button" >{item.title}</Link>
                  )
                })
              }
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
