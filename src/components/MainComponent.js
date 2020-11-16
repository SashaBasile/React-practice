import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }

//this component is the parent of the menu component as it uses its data
class Main extends React.Component {

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            );
        }

        //Switch checks in the written order where to go. 
        return (
            <div>
                <Header />
               
               

                <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route path="/aboutus" component={ () => <About leaders={this.props.leaders} />} />
              <Route path="/contactus" component={Contact} />
              <Redirect to="/home" />
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

export default withRouter(connect(mapStateToProps)(Main));
