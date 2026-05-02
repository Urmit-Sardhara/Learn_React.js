import Card from "./components/Card"
function App() {
  const jobOpenings = [
  {
    brandLogo: "https://developers.google.com/static/identity/images/branding_guideline_sample_lt_rd_sl.svg",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Bangalore, India"
  },

  {
    brandLogo: "https://cdn.iconscout.com/icon/free/png-256/free-amazon-icon-svg-download-png-1912058.png?f=webp&w=128",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/020/190/709/small/microsoft-logo-microsoft-icon-free-free-vector.jpg",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Hyderabad, India"
  },

  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/073/495/207/small/meta-logo-rounded-glossy-icon-with-transparent-background-free-png.png",
    companyName: "Meta",
    datePosted: "2 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Gurgaon, India"
  },

  {
    brandLogo: "https://cdn.iconscout.com/icon/free/png-256/free-netflix-icon-svg-download-png-8715831.png?f=webp&w=128",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Delhi, India"
  },

  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/066/118/545/small/adobe-logo-standard-icon-app-logo-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.png",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Graphic Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Pune, India"
  },

  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/038/012/470/small/bangkok-thailand-july-19-2023-tesla-logo-sign-tesla-inc-is-an-american-multinational-automotive-and-clean-energy-company-that-was-founded-in-july-1-2003-free-photo.jpg",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Bangalore, India"
  },

  {
    brandLogo: "https://i.pinimg.com/originals/95/84/d5/9584d5e3baae3add6ffa57e6bd34587b.jpg",
    companyName: "Apple",
    datePosted: "1 day ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$105/hour",
    location: "Hyderabad, India"
  },

  {
    brandLogo: "https://cdn.iconscout.com/icon/free/png-256/free-spotify-icon-svg-download-png-9089996.png?f=webp&w=128",
    companyName: "Spotify",
    datePosted: "2 weeks ago",
    post: "UX Researcher",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Remote"
  },

  {
    brandLogo: "https://cdn.iconscout.com/icon/free/png-256/free-linkedin-logo-icon-svg-download-png-789838.png?f=webp&w=128",
    companyName: "LinkedIn",
    datePosted: "5 days ago",
    post: "UI Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Remote"
  }
];
  return (
    <section className="perent">
  { jobOpenings.map(function(elm){
    return (
      
      <Card 
       company={elm.companyName} 
       post={elm.post} 
       location={elm.location} 
       logo ={elm.brandLogo} 
       date={elm.datePosted}
       tag1={elm.tag1} 
       tag2={elm.tag2}
       pay={elm.pay}
       />

      
    
  )
})}

</section>
  )
}

export default App