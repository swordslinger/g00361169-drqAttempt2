const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const path = require('path')

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });



//configuartion,1st sends build file from server too browser,2nd one sends static file from server too browser
app.use(express.static(path.join(__dirname,'../build')))
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoString = "mongodb+srv://admin:root@cluster0.3yo9l.mongodb.net/menu?retryWrites=true&w=majority"
mongoose.connect(mongoString,{useNewUrlParser: true})

const Schema = mongoose.Schema

var menuSchema = new Schema({
    foodname:String,
    price:String,
    foodpicture:String
})

var menuTable = mongoose.model("menu",menuSchema)

app.get('/', (req, res) => {
    res.send('Hello word!')
})

app.get('/api/menu',(req, res)=>{
    // const  mymenu = [
    //         {
    //             "FoodName": "Garlic Bread",
    //             "Price": "5.00",
    //             "foodID": "0",
    //             "Type": "food",
    //             "FoodPicture": "https://thumbs.dreamstime.com/b/garlic-pizza-bread-5951445.jpg"
    //           },
    //           {
    //             "FoodName": "Pizza",
    //             "Price": "14.00",
    //             "foodID": "1",
    //             "Type": "food",
    //             "FoodPicture": "https://thumbs.dreamstime.com/b/italian-pepperoni-pizza-thick-pie-crust-spicy-sausage-mozzarella-tomato-isolated-white-viewed-whole-80010925.jpg"
    //           },
    //           {
    //             "FoodName": "Pasta",
    //             "Price": "10.00",
    //             "foodID": "2",
    //             "Type": "food",
    //             "FoodPicture": "https://thumbs.dreamstime.com/b/pasta-close-up-penne-parmesan-cheese-fresh-onion-97533239.jpg"
    //           },
    //           {
    //             "FoodName": "Chips",
    //             "Price": "2.99",
    //             "foodID": "3",
    //             "Type": "food",
    //             "FoodPicture": "https://thumbs.dreamstime.com/b/fat-chips-8972481.jpg"
    //           }
    // ];

    menuTable.find((err, data)=>{
        res.json(data)
    })
    // res.status(200).json({
    //     menu:mymenu})
})
app.get(('/api/menu/:id'),(req,res)=>{
    console.log(req.params.id)

    menuTable.findById(req.params.id,(err,data)=>{
        res.json(data);
    })
})


//Deletes record in data base,based on ID
app.delete('/api/menu/:id',(req, res)=>{
    console.log("Delete menu Item: " + req.params._id)

    menuTable.findByIdAndDelete(req.params._id,(err, info)=>{
        res.send(info)
    })
})

app.put('/api/menu/:id',(req, res)=>{
console.log("Update menu: " + req.params.id)
console.log(req.body)

menuTable.findByIdAndUpdate(req.params.id,req.body, {new:true},
    (err,data)=>{
        res.send(data)
    })
    
})


app.post('/api/menu', (req, res)=>{
    console.log('Menu items recived')
    console.log(req.body.foodname)
    console.log(req.body.price)
    console.log(req.body.foodpicture)

    menuTable.create({
       foodname : req.body.foodname,
        price : req.body.price,
        foodpicture : req.body.foodpicture
    })

    res.send("item added")
})

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname+'/../build/index.html'))
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})