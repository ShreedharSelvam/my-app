import React, {Component} from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent'
import { DISHES, Dishes } from './shared/dishes'
import { render } from '@testing-library/react'

class App extends Component() {
  constructor(props) {
    super(props);
        this.state = {
          dishes: DISHES
        };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Shreedhar React App</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
