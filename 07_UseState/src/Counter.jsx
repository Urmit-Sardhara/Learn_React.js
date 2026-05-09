import { useState } from "react"

function Counter() {
    const [num, setnum] = useState(0)

    function pluse (){
        setnum(num+1)
    }
    function minus (){
setnum(num-1)
    }
    function ens5(){
        setnum(num+5)
    }
return(
    <div className="main">
        <h1>{num}</h1>
        <div className="btn">
        <button onClick={pluse}>encrease</button>
         <button onClick={minus}>Decrease</button>
         <button onClick={ens5}>pluse 5</button>
         </div>
        
    </div>
  )
}

export default Counter
