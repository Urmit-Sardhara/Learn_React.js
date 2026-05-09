import { useState } from "react"

function App() {
  const [num, setnum] = useState({name:"urmit",age:19})
  const change=()=>{       
    // setnum(...num)
    console.log(num.name);
    console.log(num.age);
    
    




   }
  return (
    
    <div>
      <h1>hello - {num.name},{num.age}</h1>
      <button onClick={change}>click</button>
    </div>
  )
}

export default App
