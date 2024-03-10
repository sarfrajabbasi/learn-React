import React from 'react'

const Greet = (props)=>{
    const {name,heroName} = props;
    
    return (
        <div>
            <h1>
                Hello {name} a.k.a{heroName}
            </h1>
        </div>
    )
}

class Welcome extends Component{
    
    render(){
        const {name,heroname} = this.props;
        const {state1,state2} = this.state
        return <h1>Welcome {name} now {heroname}</h1>
    }
}