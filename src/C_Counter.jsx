import React from 'react'

class Counter extends React.Component{
    //count=1
    state={
        Counter:1
    }
    incrHandler=()=>{
        this.setState({Counter:this.state.Counter+1})
    }
    decrHandler=()=>{
        this.setState({Counter:this.state.Counter-1})
    }
    render(){
        return(
            <div>
                <h2>Counter Component</h2>
                <h3>Counter Value:{this.state.Counter}</h3>
                <button onClick={this.incrHandler}>INCR</button>
                <button onClick={this.decrHandler}>DECR</button>
            </div>
        )
    }
}

export default Counter