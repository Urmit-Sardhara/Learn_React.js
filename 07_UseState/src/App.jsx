import { useState } from "react"


function App() {

const [num, setnum] = useState(20)

function change (){
  console.log(num);
  setnum(30)
  
  
}
  return (
    <div>
    <h1>num is the {num}</h1> 
    <button onClick={change}>click</button>     
    </div>
  )
}

export default App
