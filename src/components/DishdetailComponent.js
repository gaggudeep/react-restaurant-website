import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

    function RenderDish({dish}) {
        if(dish != null) {
            return (
                <div className="col-12 col-md-5 ml-1">
                    <Card>
                        <CardImg src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

function RenderComments({comments}) {
        if(comments != null) {
            const cmts = comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>        
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );
            });
            return (
                <div className="col-12 col-md-5">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {cmts}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const Dishdetail = (props) => {

		console.log("Dishdetail Component render is invoked.");

        if(props.selectedDish != null) {
            return (
                <div className="container">
                    <div className="row">
					<Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
						<BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{props.selectedDish.name}</h3>
						<hr />
					</div>
				    </div>
                        <div className="row">
                            <RenderDish dish={props.selectedDish} />
                            <RenderComments comments={props.comments} />
                        </div>
                </div>
             );
            }
        else {
            return (
                <div></div>
            );
        }
    }

export default Dishdetail;