import React,{Component} from 'react'

class Messagecopy extends Component{
  constructor(props){
    super(props)
    this.state={
      message:"hello"
    }
  }
  updateHandler=()=>{
    this.setState({
        message:"GM"
    })
  }
  render(){
    return(
     <div>
      <h2>Message Component</h2>
      <h3>{this.state.message}</h3>
      <button onClick={this.updateHandler}>Update Message</button>
      </div>
    )
  }
}
export default Messagecopy


// import React, { Component } from 'react';

// class Messagecopy extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: "hello"
//     };
//   }

//   updateHandler = () => {
//     this.setState({
//       message: "Good Morning"
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Message Component</h2>
//         <h3>{this.state.message}</h3>
//         <button onClick={this.updateHandler}>Update Message</button>
//       </div>
//     );
//   }
// }

// export default Messagecopy;
