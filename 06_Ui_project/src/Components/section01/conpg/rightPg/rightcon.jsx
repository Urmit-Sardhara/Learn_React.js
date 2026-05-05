import style from "./right.module.css"
import RightCCont from "./rightCCont"
function rightcon(props) {
  console.log(props.users);
  
  return (
    <section className={style.bd}>
     {props.users.map(function(elm ,idx){

        return(

          <RightCCont id={idx} img={elm.img} tag ={elm.tag} />

        )
     })}
     
      
    </section>
  )
}

export default rightcon
