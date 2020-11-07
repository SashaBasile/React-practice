import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends React.Component {

    renderDish(dish) {
        //const dish = this.props.selectedDish;

        if (dish != null) {
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
        else {
            return (
                <div></div> //if you return an empty div, nothing will be rendered on the screen
            );
        }
    }

    renderComments(dish) {
        if (dish != null) {
            const coms = dish.comments.map((com) => {
                return (
                    <ul key={com.id} className='list-unstyled'>
                        <li>
                            {com.comment}
                        </li>
                        <li>
                            -- {com.author}, { }
                            {
                                new Intl.DateTimeFormat('en-US', {
                                    month: 'short', day: '2-digit', year: 'numeric'
                                }).format(new Date(com.date))
                            }
                        </li>
                    </ul>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    {coms}
                </div>
            );

        } else {
            return (
                <div></div>
            );
        }
    }



    render() {
        const dish = this.props.selectedDish;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            </div>

        )
    }
}

export default DishDetail;

