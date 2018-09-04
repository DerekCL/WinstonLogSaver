/*
    Creates table Users.

    NOTE: We only add schema here to demonstrate the ability of class QueryFile
    to pre-format SQL with static formatting parameters when needs to be.
*/

CREATE TABLE ${schema~}.events
(
    id serial primary key,
    level text,
    message text,
    meta json,
    response_time_ms integer,
    date_created timestamp default current_timestamp
)
