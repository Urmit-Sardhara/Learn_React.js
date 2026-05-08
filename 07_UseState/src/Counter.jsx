import { useState } from "react"

function Counter() {
    const [num, setnum] = useState(0)

    function pluse (){
        setnum(num+1)
    }
    function minus (){
setnum(num-1)
    }
return(
    <div>
        <h1>{num}</h1>
        <button onClick={pluse}>encrease</button>
         <button onClick={minus}>Decrease</button>
    </div>
  )
}

export default Counter
