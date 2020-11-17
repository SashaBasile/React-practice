import React from 'react';
import { Button, Modal, ModalHeader, Row, Label, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    render() {
        return (
            <>
            <div className="row">
                <div className="col-12">
                    <Button className="bg-white text-secondary mb-5" onClick={this.toggleModal}>
                        <span className="fa fa-pencil fa-lg"></span> Submit Comment
                        </Button>
                </div>
            </div>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    

                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                    <Row className="form-group">
                    <Label htmlFor="rating" sm={{size:10, offset: 1}}>Rating</Label>
                                <Col sm={{size:10, offset: 1}}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" sm={{size:10, offset: 1}}>Your Name</Label>
                                <Col sm={{size:10, offset: 1}}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                         <Errors 
                                         className="text-danger"
                                         model=".author"
                                         show="touched"
                                         messages={{
                                             required: 'Required',
                                             minLength: "Must be greater than 2 characters",
                                             maxLength: "Must be 15 characters or less"
                                         }}
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" sm={{size:10, offset: 1}}>Comment</Label>
                                <Col sm={{size:10, offset: 1}}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                        />
                                        <Errors 
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col sm={{size:10, offset: 1}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>

                </Modal>
            </>
        );
    }
}

export default CommentForm;