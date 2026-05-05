import style from "./pagecon.module.css"
import Leftcon from "./leftPg/leftcon"
import Rightcon from "./rightPg/rightcon"
function pagecon(props) {
  console.log(props.users);
  
  return (
    <section className={style.bd}>
      <Leftcon/>
      <Rightcon users ={props.users}/>
    </section>
  )
}

export default pagecon
