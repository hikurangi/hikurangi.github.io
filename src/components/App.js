import React from 'react'
import { Link } from 'react-router'

// children
import Nav from './Nav'
import Title from './Title'
import CoverPhoto from './CoverPhoto'

// replace with API call to blog backend
import blog from '../data/blog'

// styling, assets
// import logo from '../assets/logo.svg'
// import '../App.css'

const nav = blog.map((item, index) => {
  return <Link to={item.slug} key={index} className="button dropbtn block-button">{item.title}</Link>
})

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
            <Nav nav={nav}/>

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
