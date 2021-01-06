//imports
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'




//export component for use in project
export class MenuListing extends React.Component {

    //bindings for delete menu method
    constructor(){
        super()

        this.DeleteMenu = this.DeleteMenu.bind(this)
    }

    //deletes menu item
    DeleteMenu(c){
        //for cancelng
        c.preventDefault()
        //calls delete on route point based on ID then reloads page
        axios.delete("http://localhost:4000/api/menu/"+this.props.menu._id)
        .then(()=>{
            this.props.ReloadMenu()
        })
        .catch()
    }

    // renders page with Card for styling,gets data from properties of menu
    //has on click delete which acitavtes delete method
    //and a link too bring you too the edit menu page based on object id
    render() {
        return (
            <div>
                <Card>
                    <br></br>
                    <Card.Header>{this.props.menu.foodname}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <img src={this.props.menu.foodpicture} width ="400" height="400"></img>
                                <footer className="blockquote-footer">€
                                {this.props.menu.price}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="warning" onClick={this.DeleteMenu}>Delete</Button>
                    <Link to={"/editmenu/"+ this.props.menu._id} className="btn btn-warning">Edit Menu Item</Link>
                </Card>
            </div>
        );
    }
}