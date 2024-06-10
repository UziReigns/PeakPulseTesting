import './About.css';
import './style.css';
import Member from "./Member"


function About() {
    let members = [Member("Kalvin Kouch"), Member("Kelton Lindsey"), Member("Uziel Martinez")];


  return (
    <div className="group-container">  
            <div className="banner-background">
                <div className="about-intro-inside">
                    <h1>About Us</h1>
                    <br></br>
                    <p>Our goal is to develop an app that uses sensors to track the number of people 
                        entering and exiting a location. The data is sent to a backend counter and displayed 
                        on a graph, helping to plan around peak business hours.
                    </p>

                </div>
            </div>
            <br></br>
            <div className="Center-Members">
                {members}
            </div>
        </div>  
  )
}

export default About