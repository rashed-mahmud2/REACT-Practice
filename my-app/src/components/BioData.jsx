/*
props = {
  name : "SR Setu",
  email : "srsetu@gmail.com",
  phone : "+8801234567890",
  github : "github/srsetu",
  skills : ["Js", "WP", "REACT", "NEXT", "Node"],
  interests : ["Football", "Cricket", "Chese"],
  socialLinks : [{platform : "FB", handle : "fb/srsetu"}, {platform : "Twitter", handle : "x/srsetu"}, {platform : "linkdin", handle : linkdin/in/srsetu}]
}
*/
const BioData = (props) => {
  console.log(props)
return (
    <div className="bio-data">
    <div className="personal-info">
      <h2>Biodata of {props.name}</h2>
      <p>
        <strong>email:</strong> {props.email}
      </p>
      <p>
        <strong>Phone:</strong> {props.phone}
      </p>
      <p>
        <strong>Github:</strong> {props.github}
      </p>
    </div>
    <div className="skills">
      <h2>My Skills:</h2>
      <ul>
        {props?.skills?.map(skill => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
    </div>
    <div className="interests">
      <h2>My Interests</h2>
      <ul>
        {props?.interests?.map(interest => {
          return <li key={interest}>{interest}</li>
        })}
      </ul>
    </div>
    <div className="social-link">
      <h2>My Social Media:</h2>
      <ul>
        {props?.socialLinks?.map(socialLink => {
          return <li key={socialLink.platform}>
          <strong>{socialLink.platform}: </strong>{socialLink.handle}
        </li>
        })}
      </ul>
    </div>
  </div>
)
}

export default BioData