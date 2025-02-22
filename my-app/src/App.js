// import logo from "./logo.svg";
import "./App.css";
import BioData from "./components/BioData";

const bioData = [
  {
    name: "SR Setu",
    email: "srsetu@gmail.com",
    phone: "+8801234567890",
    github: "github/srsetu",
    skills: ["Js", "WP", "REACT", "NEXT", "Node"],
    interests: ["Football", "Cricket", "Chese"],
    socialLinks: [
      { platform: "FB", handle: "fb/srsetu" },
      { platform: "Twitter", handle: "x/srsetu" },
      { platform: "linkdin", handle: "linkdin/in/srsetu" },
    ],
  },
  {
    name: "Hasin Hayder",
    email: "srsetu@gmail.com",
    phone: "+8801234567890",
    github: "github/srsetu",
    skills: ["Js", "WP", "REACT", "NEXT", "Node"],
    interests: ["Football", "Cricket", "Chese"],
    socialLinks: [
      { platform: "FB", handle: "fb/srsetu" },
      { platform: "Twitter", handle: "x/srsetu" },
      { platform: "linkdin", handle: "linkdin/in/srsetu" },
    ],
  },
  {
    name: "Asife Mahir",
    email: "srsetu@gmail.com",
    phone: "+8801234567890",
    github: "github/srsetu",
    skills: ["Js", "WP", "REACT", "NEXT", "Node"],
    interests: ["Football", "Cricket", "Chese"],
    socialLinks: [
      { platform: "FB", handle: "fb/srsetu" },
      { platform: "Twitter", handle: "x/srsetu" },
      { platform: "linkdin", handle: "linkdin/in/srsetu" },
    ],
  },
  {
    name: "Rashed Mahmud",
    email: "srsetu@gmail.com",
    phone: "+8801234567890",
    github: "github/srsetu",
    skills: ["Js", "WP", "REACT", "NEXT", "Node"],
    interests: ["Football", "Cricket", "Chese"],
    socialLinks: [
      { platform: "FB", handle: "fb/srsetu" },
      { platform: "Twitter", handle: "x/srsetu" },
      { platform: "linkdin", handle: "linkdin/in/srsetu" },
    ],
  },
];

function App() {
  return (
    <div className="App">
      {bioData.map((singleBioData) => (
        <>
          <BioData
            name={singleBioData.name}
            email={singleBioData.email}
            phone={singleBioData.phone}
            github={singleBioData.github}
            skills={singleBioData.skills}
            interests={singleBioData.interests}
            socialLinks={singleBioData.socialLinks}
          />
          <hr />
        </>
      ))}
    </div>
  );
}

export default App;
