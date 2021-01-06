//imports
import axios from 'axios'
import React from 'react'
import { Menu } from './menu'
//export component for use in project
export class MenuData extends React.Component {

    state = {
        menu: [ ]
    }
    
    componentDidMount(){
        axios.get('http://localhost:4000/api/menu')
        .then(
            (response)=>{
                this.setState({menu: response.data})
                console.log(response.data.Search)

            })
        .catch((error)=>{
            console.log(error)
        });
    }

render(){
    return (
        <div>
            <h1>This is the menu Data Component</h1>
            <Menu menu = {this.state.menu}></Menu>
        </div>
        )
    }
}
