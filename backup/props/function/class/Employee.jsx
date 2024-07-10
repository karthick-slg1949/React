let Emp=(props)=>{
    return <div>
        <h1>Employee Component</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h2>Employee Id:{props.User_Id}</h2>
        <h2>Employee Name:{props.User_Name}</h2>
        <h2>Employee Email:{props.User_Details.email}</h2>
        <h2>Employee Locaton:{props.User_Details.loc}</h2>
    </div>
}

export default Emp