import { useState } from "react"

function App() {
  const [num, setnum] = useState({name:"urmit",age:19})
  const change=()=>{       
    const newnum={...num}   // thiis use for chane valu in obj or arr 
    newnum.name="king"
    newnum.age=20
    setnum (newnum)

    


   }
  return (
    
    <div>
      <h1>hello - {num.name},{num.age}</h1>
      <button onClick={change}>click</button>
    </div>
  )
}

export default App
