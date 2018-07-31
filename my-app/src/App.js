import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";
import "./index.css";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Jumbotron />
        <Container />
          <Card />
          <Switch>
            <Route exact path="/Home" component={Home} />
          </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;


// came with build ->
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">mMmory Game Time</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
