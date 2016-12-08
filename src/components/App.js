import React from 'react'

// children
import Nav from './Nav'
import Title from './Title'
import CoverPhoto from './CoverPhoto'

// replace with API call to blog backend
import blog from '../data/blog'

// styling, assets
// import logo from '../assets/logo.svg'
// import '../App.css'

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
    console.log('setTitle in APP', this.setTitle);
    return (
      <div className="container">
        <div className="row">
          <div className="six columns">
            <Title title={this.state.title} />
            <Nav blog={blog} />

            { this.props.children }

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
