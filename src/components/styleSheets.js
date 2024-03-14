import React from 'react'
import  "./myStyle.css"

function StyleSheet(props){
    const className = props.primary?"primary":"";
    return (
        <div>
         <h1 className={`${className} font-xl`}>StyleSheet</h1>
        </div>
    )
}
const heading = {
    fontSize:'34px',
    color:'red'
}

export function Inline(){
    return ( 
        <div>
        <h1 style={heading}>
        Inline
        </h1>
        </div>
    )
}

export default StyleSheet