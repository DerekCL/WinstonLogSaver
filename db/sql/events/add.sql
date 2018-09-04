/*
    Inserts a new user record.

    NOTE: We only add schema here to demonstrate the ability of class QueryFile
    to pre-format SQL with static formatting parameters when needs to be.
*/

INSERT INTO ${schema~}.events
(
    level,
    message,
    response_time_ms,
    meta
)
VALUES
(
    ${level},
    ${message},
    ${response_time_ms},
    ${meta}
)
RETURNING *
