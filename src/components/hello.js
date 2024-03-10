import React from 'react'

const Hello = (props)=>{
    console.log(props);
    return(
        <div>
            <h1>Hello  {props.name} are you  {props.occupation}</h1>
            {props.children}
        </div>
    )

    // return React.createElement("h1",{id:'Hello',className:'Greeting'},React.createElement('h1',null,'Hello world'))
}

export default Hello

