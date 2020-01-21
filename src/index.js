import './index.css'

import React    from 'react'
import ReactDOM from 'react-dom'
import {
  // Router,
  Route,
  BrowserRouter
}               from 'react-router-dom'

import App      from './components/App'
import About    from './components/About'
import Blog     from './components/Blog'

const routes = (
  <BrowserRouter>
    <Route path="/" component={App}/>
    <Route path="/about" component={About} />
    <Route path="/blog/:blogTitle" component={Blog} />
  </BrowserRouter>
)

ReactDOM.render(routes,
  document.getElementById('root')
);
