import { useState } from "react"

const Two_way_data=()=>{
    const page=(e)=>{
        e.preventDefault()
        console.log(name)        // this is use for show data in console  after click submit
        setname("")              // after click submit clean the input filed 
    }
    const [name , setname ] = useState("")
    return (
        <div>
        <form onSubmit={(e)=>{
            page(e)
        }}>
            <input 
                type="text"
                placeholder="enter name"
                value={name}
                onChange={(e)=>{
                    setname(e.target.value)  
                    
                }}
                />
                <button>Submit</button>
        </form>
      
        </div>
    )
}

export default Two_way_data