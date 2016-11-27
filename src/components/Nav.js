import React from 'react'
import { Link } from 'react-router'

import '../../styles/main.css' // temporary css import

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
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/c1-reflection-blog.html">Cultural Blog 1a - Reflection</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/c1-time-and-habits-blog.html">Cultural Blog 1b - Time And Habits</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/t2-html-css-dom-p1.html">Technical Blog 2a - Udacity HTML/CSS Pt. 1</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/t2-html-css-dom-p2.html">Technical Blog 2b - Udacity HTML/CSS Pt. 2</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/c2-emotional-intelligence.html">Cultural Blog 2 - Emotional Intelligence</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/t3-design-to-web-blog.html">Technical Blog 3 - Responsive Design</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/c3-meditation-process.html">Cultural Blog 3 - Meditation Process</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/t4-javascript-basics.html">Technical Blog 4 - Javascript Basics</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/c4-daily-mindfulness.html">Cultural Blog 4 - Daily Mindfulness</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/t5-problem-solving.html">Technical Blog 5 - Problem Solving</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/c5-self-confidence.html">Cultural Blog 5 - Self Confidence</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/t6-js-language.html">Technical Blog 6 - JavaScript Language</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/c6-control.html">Cultural Blog 6 - Self Mastery</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/c7-motivation.html">Cultural Blog 7 - Motivation</a>
              <a className="button dropbtn block-button" href="http://hikurangi.github.io/blog/c8-connecting.html">Cultural Blog 8 - Connecting</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
