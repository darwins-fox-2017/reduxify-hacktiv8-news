import React from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';

const List = (props) => (
  <ul>
    {props.news.length === 0 && <img src={logo} className="App-logo" alt="logo" />}
    {
      props.news.map((item, index) => {
      return (
        <li key={index}><a href={item.url} target="_blank">{item.title}</a></li>
        )
      })
    }
  </ul>
)

const mapStateToProps = state => {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps,null)(List)
