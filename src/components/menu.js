//imports
import React from 'react'
import { MenuListing } from './menulisting'

//export component for use in project
export class Menu extends React.Component{
    render(){
        //creates a menu listing for each item on the menu
        return this.props.menu.map((menu)=>{
            return <MenuListing menu={menu} ReloadMenu={this.props.ReloadMenu}></MenuListing>
        })
    }
}