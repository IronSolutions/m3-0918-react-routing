import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/Home';
import { ListaPersonajesPage } from './pages/ListaPersonajes';
import { Menu } from './components/Menu';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SIMPSONS PAGE</h1>
          <Menu/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/lista/' component={ListaPersonajesPage}/>
            <Route path='/lista/:name' component={ListaPersonajesPage}/>

          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
