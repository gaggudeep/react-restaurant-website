import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

	componentDidMount() {
		console.log("Menu Component componentDidMount is invoked.");
	}

	renderDish(dish) {
		if(dish != null) {
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
				<div></div>
			);
		}
	}

	render() {

		const menu = this.props.dishes.map((dish) => {
			return (
					<div key={dish.id} className="col-12 col-md-5 m-1">
						<Card onClick={() => this.props.onClick(dish.id)}>
							<CardImg width="100%" src={dish.image} alt={dish.name} />
							<CardImgOverlay className="ml-5">
								<CardTitle>{dish.name}</CardTitle>
							</CardImgOverlay>
						</Card>
					</div>
				);
		});

		return (
			<div className="container">
				<div className="row">
						{menu}
				</div>
            </div>
		);
	}
}

export default Menu;