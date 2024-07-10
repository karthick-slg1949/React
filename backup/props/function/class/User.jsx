import React from "react";
import Employee from "./Employee";

class User extends React.Component{
    user_id=101
    user_name="Karthi"
    user_details={
        loc:"svg",
        email:"karthi@gmail.com"
    }
    render(){
        return <div>
            <h1>User Component</h1>
            <hr />
            <Employee User_Id={this.user_id} User_Name={this.user_name} User_Details={this.user_details}/>
               </div>
    }
}

export default User