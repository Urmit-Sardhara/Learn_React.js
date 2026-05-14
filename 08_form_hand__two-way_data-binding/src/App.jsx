import { useState } from "react"

function App() {

  const [name, setname] = useState("")

  function runf(e){
    e.preventDefault()
    console.log(name )
  }
  return (
    <div className="main">
      <form onSubmit={(e)=>{
        runf(e)
      }}>
        <input 
        type="text" 
        placeholder="enter name "
        value={name}
        onChange={(e)=>{
          // console.log(e.target.value );
          setname(e.target.value)
        }}
         
         /><br />
        <button>click</button>
      <h1>{name}</h1>
      </form>
    </div>
  )
}

export default App
