DROP TABLE IF EXISTS people;

CREATE TABLE people
(
        id INT NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        firstname VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        PRIMARY KEY(id)
);

INSERT INTO people
VALUES(1, "Duplouy", "Olivier", "Montpellier", "France");

DROP TABLE IF EXISTS company;

CREATE TABLE company
(
        id INT NOT NULL,
        company_name VARCHAR(255) NOT NULL,
        logo TEXT,
        city VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        PRIMARY KEY(id)
);

INSERT INTO company
VALUES(1, "Bull", "https://fr.wikipedia.org/wiki/Bull_(entreprise)#/media/Fichier:BullAtosTechnologies.png",
                "Montpellier", "France");

INSERT INTO company
VALUES(2, "Mairie de Montpellier", NULL,
                "Montpellier", "France");

INSERT INTO company
VALUES(3, "Direction Générale des Finances Publiques", "https://fr.wikipedia.org/wiki/Direction_g%C3%A9n%C3%A9rale_des_Finances_publiques#/media/Fichier:Logo_DGFP-fr.svg",
                "Montpellier", "France");

INSERT INTO company
VALUES(4, "CGI", "https://fr.wikipedia.org/wiki/CGI_(entreprise)#/media/Fichier:CGI_logo.svg",
                "Castelnau-le-Lez", "France");

INSERT INTO company
VALUES(5, "ATOS", "https://fr.wikipedia.org/wiki/Atos#/media/Fichier:Atos_logo.svg",
                "Castelnau-le-Lez", "France");

DROP TABLE IF EXISTS experience;

CREATE TABLE experience
(
        id INT NOT NULL,
        from_date DATE NOT NULL,
        to_date DATE,
        company_id INT NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY(company_id) REFERENCES company(id)
);

DROP TABLE IF EXISTS project;

CREATE TABLE project
(
        id INT NOT NULL,
        text_description TEXT,
        experience_id INT NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY(experience_id) REFERENCES experience(id)
);

COMMIT;