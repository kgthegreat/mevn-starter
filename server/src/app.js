const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/targets')
var db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(callback){
    console.log("Connection Succeeded");
})

var Target = require("../models/target")

app.get('/targets', (req,res) => {
    Target.find({}, 'title description', function (error, targets) {
        if (error) {
            console.error(error);
        }
        res.send({
            targets: targets
        })
    }).sort({_id:-1})
})

app.post('/targets', (req, res) => {
    var db = req.db
    var title = req.body.title
    var description = req.body.description
    var new_target = new Target({
        title: title,
        description: description
    })

    new_target.save(function (error) {
        if(error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: "Target saved successfully!"
        })
    })
})

app.get('/targets/:id', (req, res) => {
    var db = req.db
    var title = req.body.title
    var description = req.body.description
    Target.findById(req.params.id, 'title description', function (error, target) {
        if (error) { console.error(error); }
        res.send(target)
    })
})

app.put('/targets/:id', (req, res) => {
    var db = req.db
    Target.findById(req.params.id, 'title description', function (error, target) {
        if (error) { console.error(error); }

        target.title = req.body.title
        target.description = req.body.description
        target.save(function (error) {
            if (error) {
                console.log(error)
            }
            res.send({
                success: true
            })
        })
    })
})

app.delete('/targets/:id', (req, res) => {
    var db = req.db;
    Target.remove({
        _id: req.params.id
    }, function(err, target){
        if (err)
            res.send(err)
        res.send({
            success: true
        })
    })
})

app.listen(process.env.PORT || 8081)
