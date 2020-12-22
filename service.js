var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var database;
var FRIENDS_COLLECTION = "products";

var app = express();

app.use(bodyParser.json());

var distDir = __dirname + "/dist/Schtroumpf";
app.use(express.static(distDir));
const LOCAL_DATABASE = "mongodb+srv://loc8r-admin:pmolikujyhtg@cluster0.qacuu.mongodb.net/app?retryWrites=true&w=majority";
const LOCAL_PORT = 8080;

mongodb.MongoClient.connect(process.env.MONGODB_URI || LOCAL_DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, function(error, client) {

    if (error) {
        console.log(error);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    database = client.db();
    console.log("Database connection done.");

    var server = app.listen(process.env.PORT || LOCAL_PORT, function() {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
});

app.get("/api/status", function(req, res) {
    res.status(200).json({ status: "UP" });
});

app.get("/api/friends", function(req, res) {
    database.collection(FRIENDS_COLLECTION).find({}).toArray(function(error, data) {
        if (error) {
            manageError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json(data);
            console.log("GET")
        }
    });
});

app.post("/api/friends", function(req, res) {
    var product = req.body;

    if (!product.name) {
        manageError(res, "Invalid friend input", "Name is mandatory.", 400);
    } else if (!product.age) {
        manageError(res, "Invalid friend input", "Age is mandatory.", 400);
    } else if (!product.family) {
        manageError(res, "Invalid friend input", "Family is mandatory.", 400);
    } else if (!product.alimentation) {
        manageError(res, "Invalid friend input", "Alimentation is mandatory.", 400);
    } else {
        database.collection(FRIENDS_COLLECTION).insertOne(product, function(err, doc) {
            if (err) {
                manageError(res, err.message, "Failed to create new friend.");
            } else {
                res.status(201).json(doc.ops[0]);
                console.log("POST")
            }
        });
    }
});

app.delete("/api/friends/:id", function(req, res) {
    if (req.params.id.length > 24 || req.params.id.length < 24) {
        manageError(res, "Invalid friend id", "ID must be a single String of 12 bytes or a string of 24 hex characters.", 400);
    } else {
        database.collection(FRIENDS_COLLECTION).deleteOne({ _id: new ObjectID(req.params.id) }, function(err, result) {
            if (err) {
                manageError(res, err.message, "Failed to delete friend.");
            } else {
                res.status(200).json(req.params.id);
                console.log("DELETE")
            }
        });
    }
});

// Errors handler.
function manageError(res, reason, message, code) {
    console.log("Error: " + reason);
    res.status(code || 500).json({ "error": message });
}