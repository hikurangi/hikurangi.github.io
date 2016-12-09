import React from 'react'

// children
import Nav from './Nav'
import Title from './Title'
import CoverPhoto from './CoverPhoto'
import Blog from './Blog'

// styling, assets
// import logo from '../assets/logo.svg'
// import '../App.css'

// replace with API call to blog backend
import blog from '../data/blog'

class App extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      title: "Hikurangi's EDA Blog"
    }
  }

  setTitle = title => {
    this.setState({title})
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="six columns">
            <Title title={this.state.title} />
            <Nav blog={blog} />

            { window.location.pathname.includes("/blog/") ? <Blog blog={blog} /> : null }

          </div>
          <div className="six columns">
            <CoverPhoto />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
