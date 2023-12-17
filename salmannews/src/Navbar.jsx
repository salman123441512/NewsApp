import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      search:''
    }
  }
  postData=(e)=>{
    e.preventDefault()
    this.props.changeSearch(this.state.search)
    this.setState({search:''})
  }
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-primary text-light sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">Salman News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/All">All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Politics">Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Education">Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Crime">Crime</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Bollywood">Bollywood</Link></li>
            <li><Link className="dropdown-item" to="/Science">Science</Link></li>
            <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
            <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/Cricket">Cricket</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Lanuages
          </a>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('hi')} to="/Hindi">Hindi</button></li>
            <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('en')} to="/English">English</button></li>
         
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search"onSubmit={(e)=>this.postData(e)}>
        <input className="form-control me-2" value={this.state.search}  type="search" name='search' onChange={(e)=>this.setState({search:e.target.value})} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
    )
  }
}
