const Express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser");

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var uri = "mongodb://localhost:27017/Schtroumpf";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });


//friends POST , GET, DEL, PUT & GET id ///
const FriendModel = mongoose.model("friends", {
    age: Number,
    family: String,
    race: String,
    food: String
});

app.post("/friends", async(request, response) => {
    try {
        var friend = new FriendModel(request.body);
        var result = await friend.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get("/friends", async(request, response) => {
    try {
        var result = await FriendModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get("/friends/:id", async(request, response) => {
    try {
        var person = await FriendModel.findById(request.params.id).exec();
        response.send(person);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.put("/friends/:id", async(request, response) => {
    try {
        var person = await FriendModel.findById(request.params.id).exec();
        person.set(request.body);
        var result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.delete("/friends/:id", async(request, response) => {
    try {
        var result = await FriendModel.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(8080, () => {
    console.log("Listening at :8080...");
});


//REGISTER

//var router = Express.Router();
var User = require('./backend/models/user');

app.post('/register', function(req, res, next) {
    var user = new User({
        login: req.body.login,
        password: User.hashPassword(req.body.password),
        creation_dt: Date.now()
    });

    let promise = user.save();

    promise.then(function(doc) {
        return res.status(201).json(doc);
    })

    promise.catch(function(err) {
        return res.status(501).json({ message: 'Error registering user.' })
    })
})