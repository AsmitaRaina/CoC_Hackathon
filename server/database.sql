CREATE DATABASE jwttutorial;

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL, 
    user_password VARCHAR(255) NOT NULL
);

--insert fake users

INSERT INTO users (user_name, user_email, user_password) VALUES ('asmitaraina', 'araina_b21@it.vjti.ac.in', 'ash2003');
INSERT INTO users (user_name, user_email, user_password) VALUES ('devayanichandane', 'drchandane_b21@it.vjti.ac.in', 'dchandane');

CREATE TABLE student (
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    reg_id int NOT NULL,
    fullname VARCHAR(255) NOT NULL, 
    std_address VARCHAR(255) NOT NULL,
    std_email VARCHAR(255) NOT NULL,
    guard_name VARCHAR(255) NOT NULL,
    guard_num VARCHAR(255) NOT NULL
);

CREATE TABLE events (
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    event_date DATE NOT NULL,
    event_venue VARCHAR(255),
    start_time VARCHAR(255),
    end_time VARCHAR(255),
    event_description VARCHAR(255),
    organiser VARCHAR(255)
);

CREATE TABLE complaints (
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    std_name VARCHAR(255),
    date_complaint date,
    room_num int,
    std_block VARCHAR(255),
    issue_type VARCHAR(255)
);

-- CREATE DATABASE hostel;
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- CREATE TABLE hostelites(
--     h_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

--     h_name VARCHAR(255) NOT NULL,
--     h_email VARCHAR(255) NOT NULL,
--     h_password VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE student (
--     user_id uuid PRIMARY KEY DEFAULT
--     uuid_generate_v4(),
--     reg_id int NOT NULL,
--     fullname VARCHAR(255) NOT NULL, 
--     std_address VARCHAR(255) NOT NULL,
--     std_email VARCHAR(255) NOT NULL,
--     guard_name VARCHAR(255) NOT NULL,
--     guard_num VARCHAR(255) NOT NULL
-- );

-- --insert fake users

-- INSERT INTO student (reg_id, fullname, std_address, std_email, guard_name, guard_num) VALUES (211081003, 'asmita raina', 'noida', 'araina_b21@it.vjti.ac.in', 'amy', 9811093582);

-- INSERT INTO hostelites(h_name,h_email,h_password) VALUES ('Asmita','araina_b21@it.vjti.ac.in','ashsap123');