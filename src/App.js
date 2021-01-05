import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
import { MakeMenu } from './components/makemenu';
import { MenuData } from './components/menudata';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { FineDining } from './components/finedining';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Fine Dining</Nav.Link>
            <Nav.Link href="/menudata">menu</Nav.Link>
            <Nav.Link href="/makemenu">Create Menu</Nav.Link>
          </Nav>
        </Navbar>
        <br/>
        <Switch>
          <Route path = '/' component = {FineDining} exact></Route>
          <Route path = '/makemenu' component = {MakeMenu} exact></Route>
          <Route path = '/menudata' component = {MenuData} exact></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
