import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

//this component is the parent of the menu component as it uses its data
class Main extends React.Component {

    constructor(props) {
        super(props);

        // the state stores data relative to this component
        // which you can make use of
        // you can pass these information to any child component via props
        this.state = {
            dishes: DISHES,
        };
    }

    render() {
        
        const HomePage = () => {
            return(
                <Home />
            )
        }
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} /> 
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

//you need to enclose your navigation within the Switch component which indicates
//you can switch between the enclosed components. Each route available is represented
//by a route component with its own relative path - for the menu we have adopted a different
// syntax as this will allow us to add props.

//Redirect indicates a default path. 

export default Main;
