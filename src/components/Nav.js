import React, { Component } from 'react'

import '../../styles/main.css' // temporary css import

class Nav extends Component {
  render () {
    return (
      <nav>
        <ul id="list-style">
          <li><a class="button block-button" href="http://hikurangi.github.io/index.html">Home</a></li>
          <li><a class="button block-button" href="http://hikurangi.github.io/about.html">About</a></li>
          <li>
            <div class="dropdown">
              <button class="button dropbtn">Blog</button>
              <div class="dropdown-content">
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/c1-reflection-blog.html">Cultural Blog 1a - Reflection</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/c1-time-and-habits-blog.html">Cultural Blog 1b - Time And Habits</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/t2-html-css-dom-p1.html">Technical Blog 2a - Udacity HTML/CSS Pt. 1</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/t2-html-css-dom-p2.html">Technical Blog 2b - Udacity HTML/CSS Pt. 2</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/c2-emotional-intelligence.html">Cultural Blog 2 - Emotional Intelligence</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/t3-design-to-web-blog.html">Technical Blog 3 - Responsive Design</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/c3-meditation-process.html">Cultural Blog 3 - Meditation Process</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/t4-javascript-basics.html">Technical Blog 4 - Javascript Basics</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/c4-daily-mindfulness.html">Cultural Blog 4 - Daily Mindfulness</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/t5-problem-solving.html">Technical Blog 5 - Problem Solving</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/c5-self-confidence.html">Cultural Blog 5 - Self Confidence</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/t6-js-language.html">Technical Blog 6 - JavaScript Language</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/c6-control.html">Cultural Blog 6 - Self Mastery</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/c7-motivation.html">Cultural Blog 7 - Motivation</a>
                <a class="button dropbtn block-button" href="http://hikurangi.github.io/blog/c8-connecting.html">Cultural Blog 8 - Connecting</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}
