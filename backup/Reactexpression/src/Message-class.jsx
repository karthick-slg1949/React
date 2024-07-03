import React from "react";

class Message2 extends React.Component{
    eid=101
    ename="karthi"
    eloc="svg"
    details={
        sal:55000,
        avail:true
    }

    render(){
        return <div>
            <h2>Message Component</h2>
            <h2>Employee ID:{this.eid}</h2>
            <h2>Employee Name:{this.ename}</h2>
            <h2>Employee location:{this.eloc}</h2>
            <h2>Employee Details:{JSON.stringify(this.details)}</h2>
            
        </div>
    }
}

export default Message2