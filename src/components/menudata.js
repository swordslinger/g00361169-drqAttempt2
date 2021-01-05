//imports
import React from 'react'
import { Menu } from './menu'

//export component for use in project
export class MenuData extends React.Component {

    menuData = {
        menu: [
            {
                "FoodName": "Garlic Bread",
                "Price": "5.00",
                "imdbID": "0",
                "Type": "food",
                "FoodPicture": "https://thumbs.dreamstime.com/b/garlic-pizza-bread-5951445.jpg"
            },
            {
                "FoodName": "Pizza",
                "Price": "14.00",
                "imdbID": "1",
                "Type": "food",
                "FoodPicture": "https://thumbs.dreamstime.com/b/italian-pepperoni-pizza-thick-pie-crust-spicy-sausage-mozzarella-tomato-isolated-white-viewed-whole-80010925.jpg"
            },
            {
                "FoodName": "Pasta",
                "Price": "10.00",
                "foodID": "2",
                "Type": "food",
                "FoodPicture": "https://thumbs.dreamstime.com/b/pasta-close-up-penne-parmesan-cheese-fresh-onion-97533239.jpg"
            },
            {
                "FoodName": "Chips",
                "Price": "2.99",
                "foodID": "3",
                "Type": "food",
                "FoodPicture": "https://thumbs.dreamstime.com/b/fat-chips-8972481.jpg"
            }
        ]
    }
        


render(){
    return (
        <div>
            <h1>This is the menu Data Component</h1>
            <Menu menu = {this.menuData.menu}></Menu>
        </div>
        )
    }
}
