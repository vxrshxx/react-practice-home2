function Test()
{
    let age=18;
    let name="kiran";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age);
    console.log(name);
    console.log(setStatus)
    console.log(userDefault)
    console.log(responseValue);
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(age);
    console.log(setStatus)
const hi=()=>(alert("Check the console output"))
return(
<div><button onClick={hi}>Primitive Data Types</button></div>
)
}
ReactDOM.render(<Test/>,document.getElementById('mydiv'))