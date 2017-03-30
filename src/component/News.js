import React, { Component } from 'react';
import Form from './Form'
import List from './List'
import Header from './Header'
import Menu from './Menu'
import { connect } from 'react-redux'
import { actionLoadNews } from '../action/index'

class News extends Component {
  constructor(props){
    super(props)

  }
  componentDidMount(){
    fetch(`http://hn.algolia.com/api/v1/search?query=redux`)
    .then(res => res.json())
    .then(data => this.props.loadNews(data.hits))
  }
  changeHandler(keyword){
    fetch(`http://hn.algolia.com/api/v1/search?query=${keyword}`)
    .then(res => res.json())
    .then(data => this.props.loadNews(data.hits))
  }
  render() {
    return (
      <div className="News">
        <Header />
        <Menu />
        <List  />
        <Form changeHandler={(keyword)=>this.changeHandler(keyword)} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadNews: (data) => dispatch(actionLoadNews(data))
})

export default connect(null,mapDispatchToProps)(News);
