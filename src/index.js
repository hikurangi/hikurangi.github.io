import './index.css'

import React    from 'react'
import ReactDOM from 'react-dom'
import { h }    from 'react-hyperscript-helpers'

import Content  from './components/Content'
import Layout   from './components/Layout'

const App = h(Layout, [h(Content)])

ReactDOM.render(App, document.getElementById('root'))