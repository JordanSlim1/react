import React from 'react';
import { Route } from 'react-router-dom';
import logo from './tek_logo.png';
import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Weather from './Views/Weather';
import Politics from './Views/Politics';
import Footer from './Components/Footer';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
          <img src={logo} className="App-logo" alt="logo" />
        <div>
         <br/>
          {/* <p>Create a News Site</p>
          <p>Set up a Single Page Application (SPA) with react-router</p> */}
          <Route exact path="/">
            <Headlines/>
          </Route>
          <Route path="/sports">
            <Sports/>
          </Route>
          <Route path="/weather">
            <Weather/>
          </Route>
          <Route path="/politics">
            <Politics/>
          </Route>
        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
