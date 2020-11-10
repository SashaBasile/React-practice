import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';


//this component is the parent of the menu component as it uses its data
class Main extends React.Component {

    constructor(props) {
        super(props);

        // the state stores data relative to this component
        // which you can make use of
        // you can pass these information to any child component via props
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            );
        }

        //Switch checks in the written order where to go. 
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
                    <Route path="/contactus" component={Contact} />
                    <Redirect path="/"/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

//you need to enclose your navigation within the Switch component which indicates
//you can switch between the enclosed components.  Switch indicates that only one
// of the option will be rendered (the first tha match with the url indicated). Each route available is represented
//by a route component with its own relative path - for the menu we have adopted a different
// syntax as this will allow us to add props.

//Redirect indicates a default path. 

export default Main;
