var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var stack = require("../models/stack.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    stack.all(function(data) {
        var hbsObject = {
            stacks: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/stacks", function(req, res) {
    stack.create([req.body.name], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/stacks/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    // console.log("condition", condition);

    stack.update(req.body, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID will not exist, so 404
            return res.status(404).end();
        } else {
          res.status(200).end();
        }
    });
});

router.delete("/api/stacks/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    stack.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID will not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
