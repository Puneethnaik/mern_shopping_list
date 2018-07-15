import React, { Component } from 'react';
import './App.css';
import './components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <h1> hello world </h1>
        <ShoppingList />
      </div>
    );
  }
}

export default App;
