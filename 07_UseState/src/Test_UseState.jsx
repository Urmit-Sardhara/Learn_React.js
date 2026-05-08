import { useState } from "react"


function Test_UseState() {

const [num, setnum] = useState(20)
const [name, setname] = useState("urmit")
let [arr, setarr] = useState([10,20,30])

function change (){
  setnum(30)
  setname("king")
  setarr([20,40,60])
  console.log(typeof(arr));
  
  
  
}
  return (
    <div>
    <h1>num is the {num} <br />
    the name is the {name} <br />
    the arr is the {arr}
    </h1> 
    <button onClick={change}>click</button>     
    </div>
  )
}

export default Test_UseState
