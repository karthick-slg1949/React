import React from "react";

class Mess extends React.Component{
    msg="welcome"

    gmHandler=()=>{
        this.msg="Good Morning"
        this.forceUpdate()
    }
    gnHandler=()=>{
        this.msg="Good Night"
        this.forceUpdate()
    }
    render(){
        return <div>
            <h1>Mess:{this.msg}</h1>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Mess