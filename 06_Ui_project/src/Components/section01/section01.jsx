import Navbar from "./navb/Navbar"
import style from "./section1.module.css"
import Pagecon from "./conpg/pagecon"
function section01() {
  return (
   
     
      <section className={style.body}>
          <Navbar/>
          <Pagecon/>
      </section>
    
  )
}

export default section01
