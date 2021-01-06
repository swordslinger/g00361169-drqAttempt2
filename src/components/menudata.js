//imports
import axios from 'axios'
import React from 'react'
import { Menu } from './menu'
//export component for use in project
export class MenuData extends React.Component {

    //binds method too reload page once changes are made
    constructor(){
        super();

        this.ReloadMenu = this.ReloadMenu.bind(this);
    }

    //empty doucment too be pouplated with name valeu pairs
    state = {
        menu: [ ]
    }
    
    //when component is active in view
    componentDidMount(){
        //go too this route point
        axios.get('http://localhost:4000/api/menu')
        //aysnchronus call populates empty array with name vlaue pairs
        .then(
            (response)=>{
                this.setState({menu: response.data})

            })
        .catch((error)=>{
            console.log(error)
        });
    }

    //reloads  this route point
    ReloadMenu(){
        axios.get('http://localhost:4000/api/menu')
        .then(
            (response)=>{
                this.setState({menu: response.data})
                console.log(response.data)

            })
        .catch((error)=>{
            console.log(error)
        });
    }
    
//renders page with menu data and allows reload menu too be activated
render(){
    return (
        <div>
            <Menu menu = {this.state.menu} ReloadMenu={this.ReloadMenu}></Menu>
        </div>
        )
    }
}
