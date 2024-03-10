import React from 'react'
// rfce
function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=> props.greetHandler("child-1")}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent