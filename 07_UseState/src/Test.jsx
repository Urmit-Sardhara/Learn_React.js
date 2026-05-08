
function Test() {
  // function click(){
  //   console.log("btn is clicked");
    
  // }
  // function dblclk (){
  //   console.log("btn is click two time ");
    
  // }
  // const onM =()=>{
  //   console.log("on mouse");
    
  // }

  // function inpChng(elm){
  //   console.log(elm);
    
  // }
  const click =(elm)=>{ 
    console.log("click",elm.clientX,"thi is the y",elm.clientY)
    
  }

  return (
    <div>
      {/* <h1>hello</h1> */}
      {/* <button onClick={click} onDoubleClick={dblclk} onMouseOver={onM}>clcick</button>


      <button onClick={function clk(){
        console.log("this is click by user fun ");
        
      }}>in build fun</button>



    <input onChange={()=>{
      console.log("th user is typing ");
      
    }} type="text" placeholder="enter name " /> */}


{/* <input onChange={(elm)=>{

  inpChng(elm.target.value)
  

}} type="text" placeholder="enter name" /> */}

<button onClick={(elm)=>{
  click(elm)
}} >click me </button>


    </div>
  )
}


export default Test

