import React,{Component} from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('button clicked');
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick;



export class ClassClick extends Component {
clickHandler(){
  console.log('Clicked the Button');
}
  
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

/* 
I give you some text use structured approach give me explainations including precise defination, capabilities,mechanics,implementation with illustrative examples
*/
