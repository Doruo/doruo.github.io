CREATE TABLE `covoiturage2`.`utilisateur` (
                                            `login` VARCHAR(32) NOT NULL
                                          , `nom` VARCHAR(32) NOT NULL
                                          , `prenom` VARCHAR(32) NOT NULL
                                          , PRIMARY KEY (`login`(32)))
    ENGINE = InnoDB;