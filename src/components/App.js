import React from 'react'

// children
import Nav from './Nav'
import Title from './Title'
import CoverPhoto from './CoverPhoto'

// styling, assets
// import logo from '../assets/logo.svg'
// import '../App.css'

const App = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="six columns">
          <Title /> {/*give Title a prop which changes depending on which route we're in*/}
          <Nav />
        </div>
        <div class="six columns">
          <CoverPhoto />
        </div>
      </div>
    </div>
  )
}

export default App;
