//imports
import React from 'react'

//export component for use in project
export class MakeMenu extends React.Component{

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
    }

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
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
