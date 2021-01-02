const Express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser");
const cors = require('cors');
var jwt = require('jsonwebtoken');

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors())

app.options(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var distDir = __dirname + "/dist/Schtroumpf";
app.use(Express.static(distDir));
const LOCAL_DATABASE = "mongodb://localhost:27017/Schtroumpf";
const LOCAL_PORT = 8080;

mongoose.connect(process.env.MONGODB_URI || LOCAL_DATABASE, { useUnifiedTopology: true, useNewUrlParser: true });
var server = app.listen(process.env.PORT || LOCAL_PORT, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});

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

//LOGIN

app.post('/login', function(req, res, next) {
    let promise = User.findOne({ login: req.body.login }).exec();

    promise.then(function(doc) {
        if (doc) {
            if (doc.isValid(req.body.password)) {
                // generate token
                let token = jwt.sign({ login: doc.login }, 'secret', { expiresIn: '3h' });

                return res.status(200).json(token);

            } else {
                return res.status(501).json({ message: ' Invalid Credentials' });
            }
        } else {
            return res.status(501).json({ message: 'User email is not registered.' })
        }
    });

    promise.catch(function(err) {
        return res.status(501).json({ message: 'Some internal error' });
    })
})

app.get('/user', verifyToken, function(req, res, next) {
    return res.status(200).json(decodedToken.login);
})

var decodedToken = '';

function verifyToken(req, res, next) {
    let token = req.query.token;

    jwt.verify(token, 'secret', function(err, tokendata) {
        if (err) {
            return res.status(400).json({ message: ' Unauthorized request' });
        }
        if (tokendata) {
            decodedToken = tokendata;
            next();
        }
    })
}