//imports
import React from 'react'
import Card from 'react-bootstrap/Button'

//export component for use in project
export class FineDining extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome to Scotties</h1>
                    <img src ="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"></img>
                    <br></br>
                    <p1>We’ve been serving the great people of Galway since 1991. Our family-owned and run restaurant serves amazing burgers, wings, appetizers, desserts and more.
                    We have acquired a very dedicated following of customers through the years who come in for the great food and keep returning for the warm and friendly service.
                    Here at Scotty’s we are committed to Galway and to Ireland and source our quality food locally whenever possible.  Our beef is 100% Irish and always will be to ensure the smooth flavour and textures we are known for.</p1>
            </div>
        );
    }
}
