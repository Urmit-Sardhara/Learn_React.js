import style from "./Navbar.module.css"
function Navbar() {
  return (
    <section className={style.navbar}>
        <h1>*</h1>
        <section className={style.info}>
            <h5>Home</h5>
            <h5>Blog</h5>
            <h5>Contact</h5>
        </section>
      
    </section>
  )
}

export default Navbar
