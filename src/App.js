import cat from './cat.jpg'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="top">Donate</div>
      <header className="App-header">
        <div className = "flexx">
          <img src={cat} className = "profile-img" alt="profile-image" />
          <div>
            <p>
              Ben Yao
            </p>
            <div>Auditor at Comcast</div>
            <a href="https://www.linkedin.com/in/byao/"><img alt="linkedin"></img></a>
            <a href="https://github.com/benyao111"><img alt="github"></img></a>
          </div>
        </div>
        <div>
          <button>Resume</button>
        </div>
      </header>
      <div className="project-list">Projects</div>
      
      
    </div>
  );
}

export default App;
