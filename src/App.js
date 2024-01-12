import logo from './logo.svg';
import './App.css';
import InformationBar from './Nav&Footer/InformationBar';
import NavBar from './Nav&Footer/NavBar';
import Footer from './Nav&Footer/Footer';

function App() {
  return (
    <div>
      <InformationBar />
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
