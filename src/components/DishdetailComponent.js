import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';

function RenderDish({ dish }) {
    //const dish = this.props.selectedDish;
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({ comments }) {
    if (comments != null)
        return (
            <div>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {
                                    month: 'short', day: '2-digit', year: 'numeric'
                                }).format(new Date(comment.date))
                                }</p>
                            </li>
                        );
                    })}
                </ul>
                <CommentForm />
            </div>
        );
    else
        return (
            <div></div>
        );
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div></div> //if you return an empty div, nothing will be rendered on the screen
        );
    }
}

export default DishDetail;

