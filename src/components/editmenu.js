//imports
import React from 'react'
import axios from 'axios'

//export component for use in project
export class EditMenu extends React.Component{

    //binding too instances of each method
    constructor(){
       super();
       
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

    //when compoent is active in view
    componentDidMount(){
        //go too this route point with doucment id
        axios.get("http://localhost:4000/api/menu/"+this.props.match.params.id)
        //aysnchronus call used too re render updated sate for menu documents
        .then(response =>{
            this.setState({
                _id:response.data._id,
                FoodName : response.data.foodname,
                Price: response.data.price,
                FoodPicture:response.data.foodpicture
            })
        })  
        //logs error
        .catch((err)=>{
            console.log(err)
        })
    }

    //onChanges are methods for editing values from forms
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

    //edits item
    onAddItem(c){
        //used too cancel code
        c.preventDefault();
        //alert when new values for edit menu are entered
        alert("Food: " +this.state.FoodName + " Price " + this.state.Price + " Picture Of food " + this.state.FoodPicture)

        //creates edits menu item from values passed in 
        const newMenu = {
            foodname: this.state.FoodName,
            price: this.state.Price,
            foodpicture: this.state.FoodPicture,
            _id:this.state._id
        }
        
        //sends id+new menu data back too url
        axios.put('http://localhost:4000/api/menu/'+this.state._id,newMenu)
        .then(res =>{
            console.log(res.data)
        })
        .catch()
     }


    //renders formatted page with submit buttons and inputs binded too the methods
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onAddItem}>
                    <div className="form-group">
                        <label>Edit Food Name</label>
                        <input type='text' className='form-control'
                            value={this.state.FoodName}
                            onChange={this.onChangeFoodName}></input>
                    </div>
                    <div className="form-group">
                        <label>Edit Food Price</label>
                        <input type = 'text'
                            className='form-control'
                            value={this.state.Price}
                            onChange={this.onChangePrice}></input>
                        </div>
                    <div className="form-group">
                        <label>Edit Picture of food: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.FoodPicture}
                            onChange={this.onChangeFoodPicutre}>
                        </input>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                            value='Edit Menu'
                            className='btn btn-warning'></input>
                    </div>
                </form>
            </div>
        );
    }
}
