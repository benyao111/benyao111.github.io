import cat from './cat.jpg';
import './App.css';
import githubsvg from './icons/githubwhite.svg';
import linkedinsvg from './icons/linkedinwhite.svg';
import mailicon from './icons/mailicon.svg';
import homeicon from './icons/homeicon.svg';
import financeicon from './icons/finance.svg';
import storeicon from './icons/store.svg';
import yticon from './icons/yt.svg';
import resume from './resume.pdf';

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
      <a href = "https://youtu.be/iuv40TEQHfI" target="_blank" rel="noopener noreferrer" className="example-project">
          <img src={homeicon} alt="project1" className = "project-icon"></img>
          <div>
            Developed a web application inspired by Airbnb/Zillow that utilizes the Google Places API 
            and a self made API to fetch rental home data from a MongoDB sample database. This application 
            was dockerized and hosted on AWS with application load balancing and an SSL/TLS Certificate. 
            Built with Python, JavaScript, HTML/CSS, React, Django, BootStrap5.x. Database: MongoDB. 
          </div>
      </a>
      <a href = "https://youtu.be/BFB4nId_vDc" target="_blank" rel="noopener noreferrer" className = "example-project">
          <img src={financeicon} alt="project2" className = "project-icon"></img>
          <div>Developed a Flask web app designed to mimic buying and selling common stocks/ETFs. Used the IEX API to 
get stock quotes and created a back-end database to store “purchases”. Also created a second database that was used for 
authentication and account creation. Built with Python, Flask, HTML, BootStrap5.x. Database: SQLite.</div>
      </a>

      <a href = "https://youtu.be/Otiu_T5hmtw" target="_blank" rel="noopener noreferrer" className = "example-project">
        <img src={storeicon} alt="project2" className = "project-icon"></img>
        <div> Developed an eBay-like website for auction sales. Built with Python, Django, HTML, BootStrap5.x. 
Database: SQLite.</div>
      </a>

      <a href = "https://youtu.be/7ZVG9C3hmAk" target="_blank" rel="noopener noreferrer" className = "example-project">
        <img src={mailicon} alt="project2" className = "project-icon"></img>
        <div>Developed an email application. Built with Python, Django, JavaScript, HTML, 
          BootStrap5.x. Database: SQLite. </div>
      </a>

      <a href = "https://www.youtube.com/@phoenix-valorantclips/shorts" target="_blank" rel="noopener noreferrer" className = "example-project">
        <img src={yticon} alt="project2" className = "project-icon"></img>
        <div>Created a scheduled task that automatically takes top clips from Valorant streams and puts them on Youtube in shorts format. Built with Python using Selenium for web automation. Hosted on Fly.io.</div>
      </a>

      </div>
      </div>
    <div className="bot">
      <a href = "https://www.google.com">.</a>
    </div>
      
    </div>
  );
}

export default App;
