const router = require("express").Router();
const { index } = require("../lib/index");

// Index route to the index page.
router.post("/", index);

module.exports = router;
