import React from 'react'

function MyList(){
    const names =["sarfraj","abcdef","notAtAll","ok  let's do this","no you can't take this","mbaNotAllow"]
    const list = names.map((name,index)=> <h2 key={index}>{index}{name}</h2>)
    return <div>{list}</div>
}

export default MyList