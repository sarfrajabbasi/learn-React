// if child component wanted to communicate with parent component,strangley we still use props.and passess a refer to a method as props to the chile component.
// react snippet=rce
import React, { Component } from 'react'
import childComponent from './childComponent'

class ParentComponent extends Component {
    // rconst
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`Hello ${this.state.parentName} fron`)
    }
  render() {
    return (
      <div>
<ChildComponent></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent