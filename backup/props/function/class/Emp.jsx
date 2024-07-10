import React,{Component} from "react";

class Employee extends React.Component{
    render(){
        return <div>
            <h1>Employee Component</h1>
            <pre>
                {JSON.stringify(this.props)}
            </pre>
            <h2>Employee Id:{this.props.User_Id}</h2>
            <h2>Employee Name:{this.props.User_Name}</h2>
            <h2>Employee Email:{this.props.User_Details.email}</h2>
            <h2>Employee Location:{this.props.User_Details.loc}</h2>
               </div>
    }
}

export default Employee