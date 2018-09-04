"use strict";

const sql = require("../sql").events;

class events_repository {
  constructor(db, pgp) {
    this.db = db;
    this.pgp = pgp;
  }
  // Adds a new user, and returns the new object;
  add(values) {
    // Values Check
    return this.db.one(sql.add, {
      level: values.level,
      message: values.message,
      meta: values.meta,
      response_time_ms: values.response_time_ms,
    });
  }
  // Creates the table;
  create() {
    return this.db.none(sql.create);
  }
  // Initializes the table with some user records, and return their id-s;
  // Drops the table;
  drop() {
    return this.db.none(sql.drop);
  }
  // Removes all records from the table;
  empty() {
    return this.db.none(sql.empty);
  }
}

module.exports = events_repository;
