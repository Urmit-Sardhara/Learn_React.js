import style from "./Navbar.module.css"
function Navbar() {
  return (
    <section className={style.navbar}>
        <h1>*</h1>
        <section className={style.info}>
            <h5>home</h5>
            <h5>blog</h5>
            <h5>contact</h5>
        </section>
      
    </section>
  )
}

export default Navbar
