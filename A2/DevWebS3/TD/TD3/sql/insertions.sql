INSERT INTO `utilisateur` (`login`, `nom`, `prenom`)
VALUES ('hayem', 'haye', 'marc'),
       ('jungc', 'jung', 'carl') ,
       ('mozartw', 'mozart', 'wolfgang'),
       ('bidenj', 'biden', 'joe'),
       ('jacksonj', 'jackson', 'michael');

INSERT INTO `trajet` (`id`, `depart`, `arrivee`, `date`, `prix`, `conducteurLogin`, `nonFumeur`)
VALUES
    (NULL, 'Montpellier', 'Marseille', '12/08', '5', 'hayem', '1'),
    (NULL, 'Paris', 'Lyon', '22/10', '10', 'jungc', '0');