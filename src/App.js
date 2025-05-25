import cat from './cat.jpg'
import './App.css';
import githubsvg from './icons/githubwhite.svg'
import linkedinsvg from './icons/linkedinwhite.svg'
import mailicon from './icons/mailicon.svg'
import homeicon from './icons/homeicon.svg'
import resume from './resume.pdf'

//all icons 250px from that icon site...
//FIGURE OUT how to get the desired space between stuff so when ur writing project descs it looks nice

function App() {
  return (
    <div className="App">
      
      <div className="App-header">
        <div className = "flexx">
          <img src={cat} className = "profile-img" alt="profile-image" />
          <div>
            <p>
              Ben Yao
            </p>
            <div>Auditor at Comcast</div>
            <div className = "icon-container"> 
              <a href="https://www.linkedin.com/in/byao/"><img className="icon" src = {linkedinsvg} alt="linkedin"></img></a>
              <a href="https://github.com/benyao111"><img className = "icon" src={githubsvg} alt="github"></img></a>
            </div>
          </div>
        </div>
        <div className="resume-container">
          <a href={resume} target="_blank" rel="noopener noreferrer"> <button className="resume">Resume</button> </a>
        </div>
      </div>
      <div className="project-list">Projects</div>
      <div className = "project-container">
      <div className = "project-div">
      <a href = "http://www.youtube.com" className="example-project">
          <img src={homeicon} alt="project1" className = "project-icon"></img>
          <div>
            Developed a web application inspired by Airbnb/Zillow that utilizes the Google Places API 
            and a self made API to fetch rental home data from a MongoDB sample database. This application 
            was dockerized and hosted on AWS with application load balancing and an SSL/TLS Certificate. 
            Built with Python, JavaScript, HTML/CSS, React, Django, BootStrap5.x. Database: MongoDB. 
          </div>
      </a>
      <a href = "https://www.youtube.com" className = "example-project">
          <img src={mailicon} alt="project2" className = "project-icon"></img>
          <div>Developed an email application. Frontend uses Django API. Built with Python, Django, JavaScript, HTML, 
          BootStrap5.x. Database: SQLite. </div>
      </a>

      <a href = "youtube.com" className = "example-project">
        <img src={mailicon} alt="project2" className = "project-icon"></img>
        <div>Developed an email application. Frontend uses Django API. Built with Python, Django, JavaScript, HTML, 
          BootStrap5.x. Database: SQLite. </div>
      </a>

      <a href = "youtube.com" className = "example-project">
        <img src={mailicon} alt="project2" className = "project-icon"></img>
        <div>Developed an email application. Frontend uses Django API. Built with Python, Django, JavaScript, HTML, 
          BootStrap5.x. Database: SQLite. </div>
      </a>

      <a href = "youtube.com" className = "example-project">
        <img src={mailicon} alt="project2" className = "project-icon"></img>
        <div>Developed an email application. Frontend uses Django API. Built with Python, Django, JavaScript, HTML, 
          BootStrap5.x. Database: SQLite. </div>
      </a>

      </div>
      </div>
    <div className="bot">
      <a href = "youtube.com">Donate</a>
    </div>
      
    </div>
  );
}

export default App;
