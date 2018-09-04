const router = require("express").Router();

// Index route to the index page.
router.get("/", (req, res) => {
  console.log("sadasd");
  res.send("req");
});

module.exports = router;
