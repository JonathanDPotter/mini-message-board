const express = require("express");
const messages = require("../public/javascripts/messages");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
  next();
});

// get new message
router.post("/new", (req, res, next) => {
  const { user, text } = req.body;
  messages.unshift({
    user,
    text,
    added: new Date().toLocaleDateString("en-US"),
  });
  res.redirect("/");
});

module.exports = router;
