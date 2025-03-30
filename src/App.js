import cat from './cat.jpg'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="top">Donate</div>
      <header className="App-header">
        <div className = "gridd">
          <img src={cat} className = "profile-img" alt="cat" />
          <div>
            <p>
              Ben Yao
            </p>
            <div>Auditor at Comcast</div>
          </div>
        </div>
        
      </header>
      <div>
        RESUME
      </div>
      <div>Projects</div>
      <div>
        Donate (could go up top as a header top right or something)
      </div>
    </div>
  );
}

export default App;
