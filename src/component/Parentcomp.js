import React, { Component } from 'react'
import RegComponent from './RegComponent'
import PureComp from './PureComp'

class Parentcomp extends Component {
    constructor(props){
        super(props)

        this.state={
            name:"Reddya"
        }
    }
  render() {
    return (
      <div>
        Parent-Component
        <RegComponent name={this.state.name}/>
        <PureComp name={this.state.name}/> 
      </div>
    )
  }
}

export default Parentcomp
