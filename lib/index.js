const db = require("../db");

function index(req, res, next) {
  const level = req.body.level;
  const message = req.body.message;
  const meta = req.body.meta;
  const response_time_ms = req.body.meta.responseTime;
  const values = {
    level,
    message,
    meta,
    response_time_ms,
  };
  return db.events
    .add(values)
    .then(() => {
      res.json({
        status: "success",
      });
    })
    .catch(err => next(new Error(err)));
}
module.exports = { index };
