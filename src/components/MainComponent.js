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
import { postComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) },
    fetchLeaders: () => { dispatch(fetchLeaders()) }
});

//this component is the parent of the menu component as it uses its data
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errMess}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                ></DishDetail>
            );
        };

        //Switch checks in the written order where to go. 
        return (
            <div>
              <Header />
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="page"
                  timeout={300}
                >
                  <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route
                      exact
                      path="/menu"
                      component={() => <Menu dishes={this.props.dishes} />}
                    />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route
                      exact
                      path="/contactus"
                      component={() => (
                        <Contact
                          resetFeedbackForm={this.props.resetFeedbackForm}
                          postFeedback={this.props.postFeedback}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/aboutus"
                      component={() => <About leaders={this.props.leaders} />}
                    />
                    <Redirect to="/home" />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
