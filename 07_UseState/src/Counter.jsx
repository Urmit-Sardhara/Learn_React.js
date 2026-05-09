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

    <div className="bg-red-400 w-1/2 h-90 m-auto flex flex-col  justify-center items-center text-xl rounded-2xl mt-6">

        <h1 className="bg-gray-300 p-10 radi rounded-2xl">{num}</h1>

        <div className="  ">

        <button className="m-5 rounded-2xl bg-amber-400 p-2 " onClick={pluse}>encrease</button>

         <button className="m-5 rounded-2xl bg-amber-400 p-2 " onClick={minus}>Decrease</button><br />    

         <button className="items-center w-full bg-blue-500 rounded-2xl " onClick={ens5}>pluse 5</button>

         </div>

       

    </div>

  )

}



export default Counter