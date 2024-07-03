function Message(){
    let eid=101
    let ename="karthi"
    let loc=["sivagangai:","silanthagudi"]
    let details={
        sal:45000,
        avail:true
    }
    return <div>
        <h2>Message Component</h2>
        <h3>Employee ID:{eid}</h3>
        <h3>Employee Name:{ename}</h3>
        <h3>Employee Location:{loc[0]}</h3>
        <h3>Employee Details:{JSON.stringify(details)}</h3><hr />
    </div>
}

export default Message