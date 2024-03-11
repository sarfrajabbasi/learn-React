import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
//     if(this.state.isLoggedIn){
//         return (
//             <div>
// <h1>Welcom Sarfraz</h1>
//       </div>
//         )
//     }else{
//         return (
//             <div>
//       <h1>Welcom Guest</h1>
//             </div>
//           )
//     }
// let message;
// if(this.state.isLoggedIn){
// message = <div><h1>Welcom Sarfraz</h1></div>
// }else{
//     message = <div><h1>Welcome Guest</h1></div>

// }
// return message
    
//   }

// return (
//     this.state.isLoggedIn?(
//         <div><h1>Welcome Sarfraz 😎</h1></div>
//     ):(
//     <div><h1>Welcome Guest 👤</h1></div>
//     )
// )

return this.state.isLoggedIn && <div><h1>Welcome Sarfraz 😎</h1></div>
    }
}


export default UserGreeting