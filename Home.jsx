import React, { Component } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from 'react-infinite-scroll-component';


export default class Home extends Component {
constructor(){
super()

this.state={
    articles:[],
    totalResult:0,
    page:1 
}
}
 getApiData = async (query="All")=>{
   
     let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&Language=${this.props.language}&sortBy=publishedAt&apiKey=d8eb5d1c6ed143248109fbf6ae515dee
     `)
        response = await response.json()
        this.setState({articles:response.articles.filter((item)=>item.title!=='[Removed]'),
                      totalResult:response.totalResults
                    })
 }
 componentDidMount(){
    this.getApiData()
 }
componentDidUpdate(old){
   
    if(this.props !== old){
      if(this.props.search==='')
    this.getApiData(this.props.q)
    else{
      if(this.props.search===old.search)
      this.getApiData(this.props.q)
    else
    this.getApiData(this.props.search)
    }
    }
  }



  render() {
    return (
      <>
      <div className='container-fluid'>
        <div className=' row '>
        <h4>{this.props.q}</h4>
        
        {
            this.state.articles.map((item,index)=>{
                return<Newsitem keys={index} 
                 pic={item.urlToImage} 
                 title={item.title}
                 description={item.description} 
                 url={item.url}
                 />
            })
        }
        </div>
      </div>
      </>
    )
  }
}
