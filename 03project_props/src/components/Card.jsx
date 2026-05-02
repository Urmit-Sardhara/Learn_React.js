
function Card(props) {
 
  return (
    <>
     <section className="card">
        
        <section className="top">
        <img src={props.logo} alt="" />
        <button>save </button>
      
      </section>

    <section className="center">

    <h3>{props.company} <span>{props.date}</span></h3>
    <h2>{props.post}</h2>
    <section className="info">
    <h4>{props.tag1} </h4>
    <h4>{props.tag2}</h4>
    </section>
    </section>

    <section className="bottom">
      <section >
        <h3>{props.pay}</h3>
        <p>{props.location}</p>
    </section>
      
      <button>Aply now </button>
    
    </section>

      </section>  
    </>
  )
}

export default Card
