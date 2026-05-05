import { use } from "react"
import Section01 from "./Components/section01/section01"
import Section02 from "./Components/section02/section02"

function App() {
  const user =[
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Satisfide"
    },

    {
      img :"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro :"",
      tag :"Underserved"

    },

    {
      img :"https://images.unsplash.com/photo-1541535881962-3bb380b08458?q=80&w=667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro :"",
      tag :"Underbanked"
    }
  ]
  return (
    <>
      <Section01 users={user}/>
      <Section02/>
      
    </>
  )
}

export default App
