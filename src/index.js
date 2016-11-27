import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './components/App'
import About from './components/About'
import Blog from './components/Blog'

import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
    </Route>
  </Router>
),
  document.getElementById('root')
);
