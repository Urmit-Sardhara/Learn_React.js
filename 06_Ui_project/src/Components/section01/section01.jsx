import Navbar from "./navb/Navbar"
import style from "./section1.module.css"
import Pagecon from "./conpg/pagecon"
function section01(props) {
console.log(props.users);

    return (
   
     
      <section className={style.body}>
          <Navbar/>
          <Pagecon users={props.users}/>
      </section>
    
  )
}

export default section01
