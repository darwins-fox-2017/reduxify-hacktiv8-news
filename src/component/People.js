import React from 'react';
import Header from './Header'
import Menu from './Menu'
import logo from '../logo.svg';
import { connect } from 'react-redux'
import { actionLoadPeople } from '../action/index'

class People extends React.Component{
  constructor(props){
    super(props)

  }
  componentDidMount(){
    fetch(`https://swapi.co/api/people/`)
    .then(res => res.json())
    .then(data => this.props.loadPeople(data.results))
  }
  render() {
    return (
      <div className="People">
        <Header />
        <Menu />
        {this.props.people.length === 0 && <img src={logo} className="App-logo" alt="logo" />}
        <ul>
        {
          this.props.people.map((item,index)=>{
          return (
            <li key={index}><a>{item.name}</a></li>
              )
            }
          )
        }
        </ul>
      </div>
    );
  }


}

const mapDispatchToProps = dispatch => ({
  loadPeople: (data) => dispatch(actionLoadPeople(data))
})

const mapStateToProps = state => {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(People)
