import React,{usestate} from 'react'
let Message=()=>{
    let [Message,setstate]=usestate("Hello")
    let updateHandler=(value)=>{
        setMessage(value)
    }
    return <div>
        <h2>Message Component</h2>
        <h2>Message Value{value}</h2>
        <button onClick={updateHandler.bind(null,"Good Morning")}>GM</button>
        <button onClick={updateHandler.bind(null,"Good Afternoon")}>GA</button>
        <button onClick={updateHandler.bind(null,"Good Night")}>GN</button>
        </div>
}