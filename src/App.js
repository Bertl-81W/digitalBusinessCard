
/*import logo from './logo.svg';*/


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Reactin'</h1>
        <ul>
          <li>Learning React ain't easy</li>
          <li>I gotta make this shit happen</li>
          <li>for my boys...for me</li>
          <li>word is bond</li>
        </ul>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>who's this Knucklehead wantin' respect</h2>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Learning to React</h1>
      </header>
    </div>
  );
}

export default App; */


/* import Navbar from "./Navbar"*/
import './index.css';
import Top from "./Top"
import Main from "./Main"
import Bottom from "./Bottom"

export default function App() {
    return (
        <div className="app-container">
            <Top />
            <Main />
            <Bottom />
        </div>
    )
} 
/*add <Navbar /> under className=container*/