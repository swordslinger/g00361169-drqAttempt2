import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
import { MakeMenu } from './components/makemenu';
import { Menu } from './components/menu';
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
            <Nav.Link href="/menu">menu</Nav.Link>
            <Nav.Link href="/makemenu">Create Menu</Nav.Link>
          </Nav>
        </Navbar>
        <br/>
        <Switch>
          <Route path = '/' component = {FineDining} exact></Route>
          <Route path = '/makemenu' component = {MakeMenu} exact></Route>
          <Route path = '/menu' component = {Menu} exact></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
