import React from 'react'
// import { BrowserRouter } from 'react-router'
//  Match, Miss, Link ^^

// children
import Nav from './Nav'
import Title from './Title'
import CoverPhoto from './CoverPhoto'

// styling, assets
// import logo from '../assets/logo.svg'
// import '../App.css'

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="six columns">
          <Title /> {/*give Title a prop which changes depending on which route we're in*/}
          <Nav />
        </div>
        <div className="six columns">
          <CoverPhoto />
        </div>
      </div>
    </div>
  )
}

export default App;
