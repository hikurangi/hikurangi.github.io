import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './components/App'
import About from './components/About'
import Blog from './components/Blog'

import './index.css';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/blog/:blogTitle" component={Blog} />
    </Route>
  </Router>
)

ReactDOM.render(routes,
  document.getElementById('root')
);
