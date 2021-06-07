import ReactDOM from "react-dom"
import * as React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import App from "./App"

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)