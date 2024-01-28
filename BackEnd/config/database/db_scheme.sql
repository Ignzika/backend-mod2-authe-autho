CREATE DATABASE softjobs;

\ c softjobs;

CREATE TABLE usuarios (
    id SERIAL    PRIMARY KEY ,
    email        VARCHAR(50) NOT NULL UNIQUE,
    password     VARCHAR(80) NOT NULL,
    rol          VARCHAR(60),
    lenguage     VARCHAR(20)


    
);


-- duda ...por que desde consola psql solo puedoingresar valores numericos, pero desde postman y thunder... puedo ingresar lo que sea...
INSERT INTO usuarios (email ,password, rol, lenguage) VALUES ( 1, 2, 3, 4) returning *;


INSERT INTO usuarios (email ,password, rol, lenguage) VALUES ( "100", "200", "300", "400") returning *;
INSERT INTO usuarios (email ,password, rol, lenguage) VALUES ( 100, "200", "300", "400") returning *;
INSERT INTO usuarios (email ,password, rol, lenguage) VALUES ( "uno", "dos", 3, 4) returning *;
INSERT INTO usuarios (email ,password, rol, lenguage) VALUES ( holi, teni, pololi, onoli) returning *;
INSERT INTO usuarios (email ,password, rol, lenguage) VALUES ( 99, "holiwi", "holo", "wololo");

INSERT INTO usuarios (a, b, v, d) VALUES (email ,password, rol, lenguage);

SELECT * FROM usuarios;