import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

//this component is the parent of the menu component as it uses its data
class App extends React.Component {

  constructor(props) {
    super(props);

    // the state stores data relative to this component
    // which you can make use of
    // you can pass these information to any child component via props
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
