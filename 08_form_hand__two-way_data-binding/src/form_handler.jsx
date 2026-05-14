

function form_handler() {
    const formH=(e)=>{
        e.preventDefault()
        console.log("clicked ");
       
        
        
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        formH(e)
      }}>
        <input  type="text" placeholder="enter name " />
        <button>click </button>
      </form>
    </div>
  )
}

export default form_handler
