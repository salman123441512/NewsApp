import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    return (
      <>
      <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
      <div className="card">
  <img src={this.props.pic?this.props.pic:'/picture/NOimage.png'} height='200px' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{height:'130px'}}>{this.props.title.slice(0,100)+'....'}</h5>
    <p className="card-text" style={{height:'200px'}}>{this.props.description.slice(0,200)+'....'}</p>
    <a href={this.props.url} className="btn btn-primary">Read Full Article</a>
  </div>
</div>
      </div>
      </>
    )
  }
}


