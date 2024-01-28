CREATE DATABASE softjobs;

\ c softjobs;

CREATE TABLE usuarios (
    id SERIAL    PRIMARY KEY NOT NULL,
    email        VARCHAR(50) NOT NULL,
    password     VARCHAR(80) NOT NULL,
    rol          VARCHAR(60),
    lenguage     VARCHAR(20)
);

SELECT * FROM usuarios;