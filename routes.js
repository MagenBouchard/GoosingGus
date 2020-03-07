// const passport = require("passport");
const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("./models");
var isAuthenticated = require("./config/middleware/isAuthenticated");
const passport = require("passport");

router.get("/api/blends", (req, res, next) => {
  db.Blend.find({}).then(function(blends) {
    res.send(blends);
  });
});

//Add a new blend
router.post("/api/blends", function(req, res, next) {
  // console.log(req.body);

  //creates a new instance of the blend object locally then send to db to save
  db.Blend.create(req.body)
    .then(function(blend) {
      res.send(blend);
    })
    .catch(next);
});

//Update a blend in the db
router.put("/api/blends/:id", function(req, res, next) {
  db.Blend.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }).then(function(blend) {
    res.send(blend);
  });
});

// Deletes a blend
router.delete("/api/blends/:id", function(req, res, next) {
  db.Blend.findByIdAndRemove(req.params.id).then(function(blend) {
    res.send(blend);
  })
  .catch(err => {
    console.log(err);
  })
});

// Send every request to the React app
// Define any API routes before this runs


router.post("/api/register", function(req, res) {
  console.log("registering user");

  db.User.register(
    new db.User({ username: req.body.username, email: req.body.email }),
    req.body.password,
    function(err, user) {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      passport.authenticate("local")(req, res, function(data) {
        res.json(req.user);
      });
    }
  );
});

router.post("/api/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json(info);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.get("/api/logout", function(req, res) {
  req.logout();
  res.json({ message: "logged out" });
});

router.get("/api/user", function(req, res) {
  console.log("available username");
  if (req.query.username) {
    db.User.find({ username: req.query.username })
      .then(result => {
        res.json({ length: result.length });
      })
      .catch(err => res.status(422).json(err));
  } else {
    res.json({ message: "no username entered for query" });
  }
});

router.get("/api/authorized", isAuthenticated, function(req, res) {
  res.json(req.user);
});



// get the date




router.get("/api/deadlines", (req, res, next) => {
  db.Deadline.find({}).then(function(deadline) {
    res.send(deadline);
  })
  .catch(err=> {
    console.log(err);
  })
});


//Add a new deadline
router.post("/api/deadlines", function(req, res, next) {
  // console.log(req.body);

  //creates a new instance of the blend object locally then send to db to save
  db.Deadline.create(req.body)
    .then(function(deadline) {
      res.send(deadline);
    })
    .catch(next);
});



// Deletes a deadlines
router.delete("/api/deadlines/:id", function(req, res, next) {
  db.Deadline.findByIdAndRemove(req.params.id).then(function(deadline) {
    res.send(deadline);
  })
  .catch(err => {
    console.log(err);
  })
});




router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
module.exports = router;
