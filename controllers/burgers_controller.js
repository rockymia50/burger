// 1. Inside your `burger` directory, create a folder named `controllers`.

// 2. In `controllers`, create the `burgers_controller.js` file.

// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

var express = require("express");

var router = express.Router();
// var app = express();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// router.post("/api/burgers", function(req, res) {
//   burger.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// app.post("/", function(req, res) {
//     console.log(req);
//     connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function(err, result) {
//       if (err) {
//         throw err;
//       }
//       res.redirect("/");
//     });
//   });

router.put("/api/burgers", function(req, res) {
  var condition = "burger = " + req.params.burger;

  console.log("condition", condition);

  burger.update(
    {
      burger: req.body.burger
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
