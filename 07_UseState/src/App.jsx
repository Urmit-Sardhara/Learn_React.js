import { useState } from "react"


function App() {

const [num, setnum] = useState(20)
const [name, setname] = useState("urmit")

function change (){
  setnum(30)
  setname("king")
  
  
}
  return (
    <div>
    <h1>num is the {num} <br />the name is the {name}</h1> 
    <button onClick={change}>click</button>     
    </div>
  )
}

export default App
