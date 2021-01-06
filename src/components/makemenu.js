//imports
import React from 'react'
import axios from 'axios'

//export component for use in project
export class MakeMenu extends React.Component{

    constructor(){
       super();
       
       //bindings for methods below
       this.onAddItem = this.onAddItem.bind(this);
       this.onChangeFoodName = this.onChangeFoodName.bind(this);
       this.onChangePrice = this.onChangePrice.bind(this);
       this.onChangeFoodPicutre = this.onChangeFoodPicutre.bind(this)

       //tells code format for state
        this.state={
            FoodName:'',
            Price: '',
            FoodPicture:''
        }
    }

    //onChanges are methods for saving values from form inputs
    onChangeFoodName(c){
        this.setState({
            FoodName: c.target.value
        })
    }

    onChangePrice(c){
        this.setState({
        Price: c.target.value
        })
    }

    onChangeFoodPicutre(c){
        this.setState({
            FoodPicture: c.target.value
        })
    }

    //adds item too menu
    onAddItem(c){
        //code for cancling
        c.preventDefault();
        //displays message when new menu item added
        alert("Food: " +this.state.FoodName + " Price " + this.state.Price + " Picture Of food " + this.state.FoodPicture)

        //creates new menu item from values passed in 
        const newMenu = {
            foodname: this.state.FoodName,
            price: this.state.Price,
            foodpicture: this.state.FoodPicture
        }
        //sends changes too this route point,ayshcnronus call  
        axios.post('http://localhost:4000/api/menu',newMenu)
        .then((res)=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    //renders formatted page with submit buttons and inputs binded too the methods
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onAddItem}>
                    <div className="form-group">
                        <label>Add Food Name</label>
                        <input type='text' className='form-control'
                            value={this.state.FoodName}
                            onChange={this.onChangeFoodName}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Food Price</label>
                        <input type = 'text'
                            className='form-control'
                            value={this.state.Price}
                            onChange={this.onChangePrice}></input>
                        </div>
                    <div className="form-group">
                        <label>Picture of food: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.FoodPicture}
                            onChange={this.onChangeFoodPicutre}>
                        </input>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                            value='Add Menu item'
                            className='btn btn-warning'></input>
                    </div>
                </form>
            </div>
        );
    }
}
