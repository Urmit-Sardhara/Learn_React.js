import style from "./rCard.module.css"
// this is the card content for the main right div 
function rightCCont(props) {
  console.log(props.users);
  
  return (
     <section className={style.bd}>
      <img src={props.img} alt="" />
        <section className={style.ads}>
          <h1>{props.id+1}</h1>
          <section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quod voluptates magnam sequi est cum.</p>
        <section>
        <button>{props.tag}</button>
        </section>
           </section>

        </section>
   
    </section>
  )
}

export default rightCCont
