import React,{components} from 'react'

class Messagecopy extends components{
  state;
  constructor(props){
    super(props)
    this.state={
      message:"hello"
    }
  }
  updateHandler=()=>{
    this.state={
        message:"GM"
    }
  }
  render(){
    return <div>
      <h2>Message Component</h2>
      <h3>{this.state.message}</h3>
      <button onClick={this.updateHandler.bind(this,"Good Morning")}></button>
      </div>
  }
}
export default Messagecopy