import React from "react";

class Message extends React.Component{
    //msg="Hello"
    state={
        msg:"Welcome"
    }

    gmHandler=()=>{
        this.setState({msg:"Hello EveryOne"})
    }

    gnHandler=()=>{
        this.setState({msg:"ProStack Accadamy"})
    }
    render(){
        console.log("Render Method")
        return(
            <div>
                <h1>Message Component</h1>
                <h3>Message Value={this.state.msg}</h3>
                <button onClick={this.gmHandler}>HE</button>
                <button onClick={this.gnHandler}>PA</button>
            </div>
        )
    }
}

export default Message