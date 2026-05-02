// import React from 'react'

function Card(props) {
    console.log(props)
     console.log(props.user)
  return (
    <section className="card">
      <img src={props.img} alt="" />
   <h1>{props.user}</h1>   
   <h2>{props.age}</h2>
   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eos!</p>
    </section>
  )
}

export default Card
