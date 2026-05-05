import style from "./pagecon.module.css"
import Leftcon from "./leftPg/leftcon"
import Rightcon from "./rightPg/rightcon"
function pagecon() {
  return (
    <section className={style.bd}>
      <Leftcon/>
      <Rightcon/>
    </section>
  )
}

export default pagecon
