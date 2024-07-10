import CompB from "./CompB"
function CompA(){
     let eid=101
     let ename="Karthi"
    return <div>
        <h1>CompA</h1>
        <hr />
        {/* <CompB prop1={"GM"}prop2={["A","B","C"]}/> */}
        <CompB Employee_id={eid} Employee_name={ename} Msg="Welcome"/>
        <CompB />
    </div>

}

export default CompA