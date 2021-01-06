//imports
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'




//export component for use in project
export class MenuListing extends React.Component {

    constructor(){
        super()

        this.DeleteMenu = this.DeleteMenu.bind(this)
    }

    DeleteMenu(c){
        c.preventDefault()
        console.log("Delete " + this.props.menu._id)
        
        axios.delete("http://localhost:4000/api/menu/"+this.props.menu._id)
        .then(()=>{
            this.props.ReloadMenu()
        })
        .catch()
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.menu.foodname}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <img src={this.props.menu.foodpicture}></img>
                                <footer className="blockquote-footer">€
                                {this.props.menu.price}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="Danger" onClick={this.DeleteMenu}>Delete</Button>
                    <Link to={"/editmenu/"+ this.props.menu._id} className="btn btn-primary">Edit Menu Item</Link>
                </Card>
            </div>
        );
    }
}