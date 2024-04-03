-- Create table for User
CREATE TABLE IF NOT EXISTS tuton_user (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255),
    registration_date TIMESTAMP
);
-- Create table for Role
CREATE TABLE IF NOT EXISTS role (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    roleName VARCHAR(255)
);
-- Create table for user_role mapping
CREATE TABLE IF NOT EXISTS user_role (
    user_id VARCHAR(255) REFERENCES tuton_user(username),
    role_id BIGINT REFERENCES role(id),
    PRIMARY KEY (user_id, role_id)
);
-- Insert roles
INSERT INTO role (roleName)
VALUES ('ROLE_USER'),
    ('ROLE_ADMIN');
-- Insert users and assign roles
-- Insert user 'user' with role 'ROLE_USER'
INSERT INTO tuton_user (username, password, registration_date)
VALUES ('user', 'user', CURRENT_TIMESTAMP);
INSERT INTO user_role (user_id, role_id)
SELECT 'user',
    id
FROM role
WHERE roleName = 'ROLE_USER';
-- Insert user 'admin' with role 'ROLE_ADMIN'
INSERT INTO tuton_user (username, password, registration_date)
VALUES ('admin', 'admin', CURRENT_TIMESTAMP);
INSERT INTO user_role (user_id, role_id)
SELECT 'admin',
    id
FROM role
WHERE roleName = 'ROLE_ADMIN';
INSERT INTO user_role (user_id, role_id)
SELECT 'admin',
    id
FROM role
WHERE roleName = 'ROLE_USER';