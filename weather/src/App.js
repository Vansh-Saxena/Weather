import Main from './components/main/main.js';
import Nav from './components/Nav/Nav';
import Location from './components/Location/Location.js';
import './App.css';
import './media.css';

function App(props) {
  
  return (
    <div className="App">
      <Nav>
        <Location />
      </Nav>
      <Main />
    </div>
  );
}

export default App;
