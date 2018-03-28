import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home =() =>(
  <h1>Hola desde home </h1>
);
const Student =() =>(
  <h1>Hola desde students </h1>
);

const Campus =() =>(
  <h1>Hola desde campus </h1>
);

const Report =() =>(
  <h1>Hola desde report </h1>
);



class App extends Component {
  render() {

    return (
      <Router>
        <div>
        <Route exact path="/" component={Home}/>
        <Route path="/students" component={Student}/>
        <Route path="/campuses" component={Campus}/>

        <Route path="/report" component={Report}/>

        </div>
      </Router>
    );
  }
}

export default App;
