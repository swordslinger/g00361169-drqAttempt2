//imports
import React from 'react'
import axios from 'axios'

//export component for use in project
export class EditMenu extends React.Component{

    constructor(){
       super();
       
       this.onAddItem = this.onAddItem.bind(this);
       this.onChangeFoodName = this.onChangeFoodName.bind(this);
       this.onChangePrice = this.onChangePrice.bind(this);
       this.onChangeFoodPicutre = this.onChangeFoodPicutre.bind(this)

        this.state={
            FoodName:'',
            Price: '',
            FoodPicture:''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id)

        axios.get("http://localhost:4000/api/menu/"+this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                FoodName : response.data.foodname,
                Price: response.data.price,
                FoodPicture:response.data.foodpicture
            })
        })  
        .catch((err)=>{
            console.log(err)
        })
    }

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

    onAddItem(c){
        c.preventDefault();
        alert("Food: " +this.state.FoodName + " Price " + this.state.Price + " Picture Of food " + this.state.FoodPicture)

        const newMenu = {
            foodname: this.state.FoodName,
            price: this.state.Price,
            foodpicture: this.state.FoodPicture,
            _id:this.state._id
        }
        
        axios.put('http://localhost:4000/api/menu/'+this.state._id,newMenu)
        .then(res =>{
            console.log(res.data)
        })
        .catch()
    //     axios.post('http://localhost:4000/api/menu',newMenu)
    //     .then((res)=>{
    //         console.log(res)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
     }

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
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
