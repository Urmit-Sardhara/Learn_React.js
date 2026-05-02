// import React from 'react'

function Card(props) {
  // console.log(props.company);
  return (
    <>
     <section className="card">
        
        <section className="top">
        <img src="" alt="" />
        <button>save </button>
      
      </section>

    <section className="center">

    <h3>{props.company} <span>5 day to ago</span></h3>
    <h2>{props.post}</h2>
    <section className="info">
    <h4> part time </h4>
    <h4>Senior Level</h4>
    </section>
    </section>

    <section className="bottom">
      <section >
        <h3>$120</h3>
        <p>{props.location}</p>
    </section>
      
      <button>Aply now </button>
    
    </section>

      </section>  
    </>
  )
}

export default Card
