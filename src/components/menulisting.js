//imports
import React from 'react'
import Card from 'react-bootstrap/Card';

//export component for use in project
export class MenuListing extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.menu.FoodName}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.menu.FoodPicture}></img>
                            <footer className="blockquote-footer">
                                {this.props.menu.Price}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}