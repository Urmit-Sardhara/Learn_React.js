import Card from "./components/Card"
function App() {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Bangalore, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Hyderabad, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Gurgaon, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hour",
    location: "Delhi, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Graphic Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Pune, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hour",
    location: "Bangalore, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 day ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$105/hour",
    location: "Hyderabad, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "2 weeks ago",
    post: "UX Researcher",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Remote"
  },

  {
    brandLogo: "https://logo.clearbit.com/linkedin.com",
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
    // console.log(jobOpenings)
    <section className="perent">
  { jobOpenings.map(function(elm){
    return (
      <>
      <Card company={elm.companyName} post={elm.post} location={elm.location} logo ={elm.brandLogo}/>
{/* <h1>{elm.pay}</h1> */}
      </>
    
  )
})}

</section>
  )
}

export default App