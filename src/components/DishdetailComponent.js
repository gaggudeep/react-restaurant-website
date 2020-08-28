import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    render() {
        return (
                <div className="row">
                   <div key={selectedDish.id} className="col-12 col-md-5 ml-1">
                        <Card>
                            <CardImg src={selectedDish.image} alt={selectedDish.name} />
                            <CardBody>
                                <CardText>{selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                   </div>
                   <div className="col-12 col-md-5">
                        <p>Comments go here</p>
                   </div>
                </div>
        );
        // {this.renderDish(this.state.selectedDish)}
    }
}

export default App;