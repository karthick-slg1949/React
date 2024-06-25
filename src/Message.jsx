// import React from 'react'

// const Message = () => {
//   return (
//     <div>
//         <h4>Message Component</h4>
//     </div>
//   )
// }

// export default Message

// import React from 'react'

// class Message extends React.Component{
//   return(){
//     return (<div>
//     <h3>Class component</h3>
//     </div>
//     )
//   }
// }
// export default Message

// import React, { Component } from 'react'

// class Message extends Component {
    
//   render() {
//     return (
//       <div><h1>Message</h1></div>
//     )
//   }
// }

// export default Message

// function Message(){
//   let eid=101
//   let ename="karthi"
//   let loc=["svg","slg"]
//   let details={
//     sal:24000,
//     avail:true
//   }
//   return <div>
//     <h2>Message Component</h2>
//     <h3>Employee Id:{eid}</h3>
//     <h4>Employee Name:{ename}</h4>
//     <h5>Employee Location:{loc[0]}</h5>
//     <h3>Location:{JSON.stringify(details)}</h3>
//   </div>
// }
// export default Message

// import React from 'react'

// class Message extends React.Component{
//   eid=101;
//   ename="karthi";
//   loc=["svg","slg"]
//   details={
//     sal:24000,
//     avail:false
//   }
//   render (){
//     return <div>
//        <h2>Message Component</h2>
//     <h3>Employee Id:{this.eid}</h3>
//      <h4>Employee Name:{this.ename}</h4>
//      <h5>Employee Location:{this.loc[0]}</h5>
//      <h3>Location:{JSON.stringify(this.details)}</h3>
   
//     </div>

//   }
// }
// export default Message

import React,{component} from 'react'

class Message extends component{
  state;
  constructor(props){
    super(props)
    this.state={
      message:"hello"
    }
  }
  render(){
    return <div>
      <h2>Message Component</h2>
    </div>
  }
}
export default Message