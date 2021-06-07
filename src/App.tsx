import './index.css'
import * as React from 'react'
import { Switch, Route/*, Link */ } from "react-router-dom"

import Index from './pages/Index'

const style = { margin: '100px 60px 200px' }

const App = () => (
  <main style={style}>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/shows">
          <Index />
        </Route>
      </Switch>
  </main>
)

export default App
