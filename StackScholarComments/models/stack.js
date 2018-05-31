// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var stack = {
    all: function(cb) {
        orm.allOrder("stacks", "date, id", function(res) {
            cb(res);
        });
    },
    create: function(vals, cb) {
        orm.create("stacks", ['stack_name'], vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        objColVals.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        orm.update("stacks", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("stacks", condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller.
module.exports = stack;
