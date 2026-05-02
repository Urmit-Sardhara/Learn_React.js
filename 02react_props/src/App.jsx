// import React from 'react'
import Card from "./components/Card"
function App() {
  return (
   <>
   <section className="main_card">
      <Card user='urmit' age ={20} img="https://i.pinimg.com/originals/7f/58/33/7f583399a19c75a13ef17a0cc3cbde45.jpg"/>
      <Card user='king' age ={19} img="https://media.gettyimages.com/id/1406174121/photo/sun-close-up-showing-solar-surface-activity-and-corona.jpg?s=612x612&w=0&k=20&c=QIZ-TvaYKdA7BKYuHS-H5JF_es1uAK4fV2wV_sQXNd4="/>
      <Card user='sardhara' age ={21} img="https://static.vecteezy.com/system/resources/thumbnails/024/602/528/small/surface-of-sun-with-prominences-solar-radiation-generative-ai-photo.jpg"/>
      <Card user="sun" age={22} img="https://i.pinimg.com/originals/4b/e7/27/4be7277e6dd8467559f44402ac8f10c1.jpg"/>
   </section>
  
   </>
   
  )
}

export default App
