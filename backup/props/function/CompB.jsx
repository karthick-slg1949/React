function CompB(props){
    return <div>
        <h1>CompB</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Employee Id:{props.Employee_id}</h3>
        <h3>Employee Name:{props.Employee_name}</h3>
        <h3>Message:{props.Msg}</h3>
    </div>
}

export default CompB